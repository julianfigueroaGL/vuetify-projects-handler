import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Projects from '../views/Projects.vue';
import Team from '../views/Team.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard
	},
	{
		path: '/projects',
		name: 'Projects',
		component: Projects
	},
	{
		path: '/team',
		name: 'Team',
		component: Team
	}
];

const router = new VueRouter({
	routes
});

export default router;
