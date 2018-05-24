import { isDocReady, qs }from "./library/html-dom"
import { simpleSearchContainerMarkup, addSimpleSearchContainerEvent } from "./components/simple-search-widget"

const createSearchContainer = () => {
  const widgetContainer = qs('.widgetContainer');
  widgetContainer.innerHTML = simpleSearchContainerMarkup();

  addSimpleSearchContainerEvent()
}

isDocReady(createSearchContainer);
