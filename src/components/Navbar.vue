<template>
	<nav>
		<v-snackbar v-model="snackbar" :timeout="4000" top color="success">
			<span>Awesome! You added a new project.</span>
			<v-btn color="white" @click="snackbar = false">Close</v-btn>
		</v-snackbar>
		<v-toolbar text>
			<v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">Todo</span>
				<span>App</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-menu offset-y>
				<template v-slot:activator="{ on }">
					<v-btn text v-on="on" color="grey">
						<v-icon left>mdi-expand-all</v-icon>
						<span>Menu</span>
					</v-btn>
				</template>
				<v-list nav dense>
					<v-list-item v-for="link in links" :key="link.text" :to="link.route">
						<v-list-item-title class="grey--text">{{ link.text }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-btn text color="grey">
				<span>Sign Out</span>
				<v-icon right>mdi-exit-to-app</v-icon>
			</v-btn>
		</v-toolbar>

		<v-navigation-drawer v-model="drawer" class="primary">
			<v-layout column align-center>
				<v-flex class="mt-5">
					<v-avatar size="100">
						<img class="text-lg-center" src="/avatar-1.png" />
					</v-avatar>
					<p class="white--text subheading mt-1">Family Guy</p>
				</v-flex>
				<v-flex class="mt-4 mb-3">
					<Popup @projectAdded="snackbar = true" />
				</v-flex>
			</v-layout>
			<v-list nav dense>
				<v-list-item-group active-class="deep-purple--text text--accent-4">
					<v-list-item v-for="link in links" :key="link.text" :to="link.route">
						<v-list-item-icon>
							<v-icon class="white--text">{{ link.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
import Popup from './Popup';
export default {
	components: { Popup },
	data() {
		return {
			drawer: false,
			links: [
				{ icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
				{ icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
				{ icon: 'mdi-account', text: 'Team', route: '/team' }
			],
			snackbar: false
		};
	}
};
</script>

<style></style>
