<template>
	<v-dialog max-width="600px" v-model="dialog">
		<template v-slot:activator="{ on }">
			<v-btn class="success" v-on="on">
				Add New Project
			</v-btn>
		</template>
		<v-card>
			<v-card-title class="headline grey lighten-2" primary-title>
				Add New Project
			</v-card-title>
			<v-card-text>
				<v-form class="px-3" ref="form">
					<v-text-field
						v-model="title"
						label="Title"
						prepend-icon="mdi-folder"
						:rules="inputRules"
					></v-text-field>
					<v-textarea
						v-model="content"
						label="Information"
						prepend-icon="mdi-table-edit"
						:rules="inputRules"
					></v-textarea>
					<v-menu v-model="menu" :close-on-content-click="false">
						<template v-slot:activator="{ on }">
							<v-text-field
								v-on="on"
								:rules="inputRules"
								:value="formattedDate"
								clearable
								label="Due date"
								prepend-icon="mdi-calendar"
							>
							</v-text-field>
							<v-date-picker v-model="due" @change="menu = false"></v-date-picker>
						</template>
					</v-menu>
					<v-spacer></v-spacer>
					<v-btn @click="submit" class="success mx-0 mt-3" :loading="loading">Add Project</v-btn>
				</v-form>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import format from 'date-fns/format';
import db from '../config/fb';
export default {
	data() {
		return {
			title: '',
			content: '',
			due: '',
			menu: false,
			inputRules: [v => !!v || 'This field is required', v => v.length >= 3 || 'Minimum length is 3 characters'],
			loading: false,
			dialog: false
		};
	},
	methods: {
		submit() {
			if (this.$refs.form.validate()) {
				this.loading = true;
				const project = {
					title: this.title,
					content: this.content,
					due: format(new Date(this.due), 'yyyy-MM-dd'),
					person: 'Family Guy',
					status: 'ongoing'
				};
				db.collection('projects')
					.add(project)
					.then(() => {
						this.loading = false;
						this.dialog = false;
						this.$emit('projectAdded');
					});
			}
		}
	},
	computed: {
		formattedDate() {
			return this.due ? format(new Date(this.due), 'yyyy-MM-dd') : '';
		}
	}
};
</script>
