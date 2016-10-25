import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import angularUIRouter from 'angular-ui-router';
import angularUIBootstrap from 'angular-ui-bootstrap';
import angularUISelect from 'ui-select';

import travelBook from './compositions/book-my-ticket';
export default angular
    .module('app', [
        ngSanitize,
        travelBook,
        angularUIRouter,
        angularUIBootstrap,
        angularUISelect,
    ]).run(function () {
        'ngInject';
    });
