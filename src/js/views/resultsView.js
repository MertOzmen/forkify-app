import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found your query! Please try again :)';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(results => previewView.render(results, false))
      .join('');
  }
}

export default new ResultsView();
