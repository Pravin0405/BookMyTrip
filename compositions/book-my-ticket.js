import angular from 'angular';
import angularUIRouter from 'angular-ui-router';
import myService from '../components/book-my-ticket/my-service';
var moduleName = 'app.book-my-ticket';

angular
    .module(moduleName, [
        angularUIRouter
    ])
    .config(require('../components/book-my-ticket/appRoute'))
    .service('myService',myService);

export default moduleName;
