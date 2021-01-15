import { getElement,showHideEventController } from './utils.js';

const toggleNav = getElement('.toggle-nav'),
      sideBarOverlay = getElement('.sidebar-overlay'),
      closeBtn = getElement('.sidebar-close');

      showHideEventController(toggleNav, sideBarOverlay, 'show', 'add');
      showHideEventController(closeBtn, sideBarOverlay, 'show', 'remove');


// docs for showHideEventController (element add event to, element to show or hide , the class name to toggle , action on controlled element)