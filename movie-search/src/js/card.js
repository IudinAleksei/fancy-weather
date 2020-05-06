const pageElement = {
  slide: 'swiper-slide',
  card: 'card',
  cardContainer: 'card-container',
  posterContainer: 'poster-container',
  poster: 'card__poster',
  title: 'card__title',
  titleLink: 'card__title__link',
  rating: 'card__rating',
  ratingIcon: 'rating__icon',
  ratingValue: 'rating__value',
  year: 'card__year',
};

const assets = {
  star: './assets/icons/star.png',
};

const createPoster = (url) => {
  const container = document.createElement('div');
  const poster = document.createElement('img');

  container.classList.add(pageElement.posterContainer);
  poster.classList.add(pageElement.poster);

  poster.setAttribute('src', url);
  poster.setAttribute('alt', 'film poster');

  container.append(poster);

  return container;
};

const createTitle = (title, url) => {
  const filmTitle = document.createElement('p');
  const link = document.createElement('a');

  filmTitle.classList.add(pageElement.title);
  link.classList.add(pageElement.titleLink);

  link.setAttribute('href', url);
  link.setAttribute('target', '_blank');

  link.innerText = title;

  filmTitle.append(link);

  return filmTitle;
};

const createRating = (rating) => {
  const ratingContainer = document.createElement('div');
  const icon = document.createElement('img');
  const value = document.createElement('span');

  ratingContainer.classList.add(pageElement.rating);
  icon.classList.add(pageElement.ratingIcon);
  value.classList.add(pageElement.ratingValue);

  icon.setAttribute('src', assets.star);
  icon.setAttribute('alt', 'star');

  value.innerText = `: ${rating}`;

  ratingContainer.append(icon);
  ratingContainer.append(value);

  return ratingContainer;
};

const createYear = (value) => {
  const year = document.createElement('p');

  year.classList.add(pageElement.year);

  year.innerText = value;

  return year;
};

const createLinkToVideoGallery = (id) => {
  const link = `https://www.imdb.com/title/${id}/videogallery/`;
  return link;
};

const createLinkToPhotoGallery = (id) => {
  const link = `https://www.imdb.com/title/${id}/mediaindex/`;
  return link;
};

const createLinkToCast = (id) => {
  const link = `https://www.imdb.com/title/${id}/fullcredits/`;
  return link;
};

const createCard = (movieData) => {
  const { imdbID } = movieData;
  const linkToVideo = createLinkToVideoGallery(imdbID);

  const title = createTitle(movieData.Title, linkToVideo);
  const poster = createPoster(movieData.Poster);
  const year = createYear(movieData.Year);
  const rating = createRating('8.0');

  const slide = document.createElement('div');
  const container = document.createElement('div');

  slide.classList.add(pageElement.slide);
  container.classList.add(pageElement.cardContainer);

  container.append(title);
  container.append(poster);
  container.append(year);
  container.append(rating);

  slide.append(container);

  return slide;
};

export default createCard;
