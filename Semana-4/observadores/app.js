document.addEventListener('DOMContentLoaded', function() {
  const { fromEvent } = rxjs;
  const { debounceTime, map, filter, distinctUntilChanged } = rxjs.operators;
  
  const commentInput = document.querySelector('.input');
  const preview = document.querySelector('.preview');
  const error = document.querySelector('.error');
  const addCommentButton = document.querySelector('.btn');
  const commentsList = document.querySelector('.comments-list');
  
  const maxLength = 200;
  const forbiddenWords = ['spam', 'odio', 'tonto', 'estupido', 'idiota','imbecil', 'loco', 'mmg', 'nigga', 'marica' ];
  
  const commentStream = fromEvent(commentInput, 'input').pipe(
    map(event => event.target.value),
    debounceTime(300),
    distinctUntilChanged(),
    map(text => {
      if (text.length > maxLength) {
        throw new Error(`El comentario no puede exceder ${maxLength} caracteres`);
      }
      if (forbiddenWords.some(word => text.toLowerCase().includes(word))) {
        throw new Error('El comentario contiene palabras prohibidas');
      }
      return text;
    }),
    filter(text => text.trim().length > 0)
  );

  commentStream.subscribe({
    next: (text) => {
      preview.textContent = text;
      error.textContent = '';
    },
    error: (err) => {
      preview.textContent = '';
      error.textContent = err.message;
    }
  });

  function addComment(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';

    deleteButton.addEventListener('click', () => {
      commentsList.removeChild(li);
    });

    li.appendChild(deleteButton);
    commentsList.appendChild(li);
  }

  addCommentButton.addEventListener('click', () => {
    const commentText = commentInput.value;

    if (commentText.length === 0 || commentText.length > maxLength || forbiddenWords.some(word => commentText.toLowerCase().includes(word))) {
      error.textContent = 'El comentario no es válido.';
    } else {
      addComment(commentText);
      commentInput.value = '';
      preview.textContent = '';
      error.textContent = '';
    }
  });
});
