export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');

  const markup = images
    .map(
      image => `
      <a class="gallery-item" href="${image.largeImageURL}">
        <div class="photo-card">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${image.likes}</p>
            <p><b>Views:</b> ${image.views}</p>
            <p><b>Comments:</b> ${image.comments}</p>
            <p><b>Downloads:</b> ${image.downloads}</p>
          </div>
        </div>
      </a>
    `
    )
    .join('');

  gallery.innerHTML = markup;
}
