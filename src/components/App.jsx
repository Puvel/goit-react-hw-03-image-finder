import { Component } from 'react';
import { fetchImages } from 'services/api';
import { Searchbar } from 'components/searchBar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import { Button } from 'components/button/Button';
import { Preloader } from './loader/Preloader';
import { Modal } from 'components/modal/Modal';
import { Notification } from 'components/notification/Notification';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    isOpen: false,
    currentImage: '',
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchImages()
      .then(({ data }) => this.setState({ images: this.mapper(data.hits) }))
      .catch(error => this.setState({ error }))
      .finally(this.timer());
  }

  timer = () => {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query, error } = this.state;
    this.setState({ images: [], isLoading: true });
    fetchImages(query, 1)
      .then(({ data }) => this.setState({ images: this.mapper(data.hits) }))
      .catch(() => this.setState({ error }))
      .finally(this.timer());
  };

  handleClick = () => {
    const { query, page, error } = this.state;
    this.setState({ isLoading: true });
    fetchImages(query, page + 1)
      .then(({ data }) => {
        this.setState(state => ({
          images: [...state.images, ...this.mapper(data.hits)],
          page: state.page + 1,
        }));
        return data;
      })
      .then(() => this.scroll())
      .catch(() => this.setState({ error }))
      .finally(this.timer());
  };

  scroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  mapper = images => {
    return images.map(
      ({ webformatURL: smallImage, largeImageURL: largeImage, ...props }) => ({
        smallImage,
        largeImage,
        ...props,
      })
    );
  };

  openModal = e => {
    e.preventDefault();
    this.setState({
      isOpen: true,
      currentImage: e.target.getAttribute('data-large'),
      isLoading: true,
    });
    this.timer();
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
      currentImage: '',
    });
  };

  render() {
    const { images, query, isLoading, isOpen, currentImage, error } =
      this.state;
    return (
      <section className="App">
        <Searchbar
          query={query}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {(images.length > 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )) || <Notification text="No results were found for your request!" />}

        {isLoading && <Preloader />}
        {error && <Notification text={error.message} />}
        {images.length > 0 && <Button handleClick={this.handleClick} />}
        {isOpen && (
          <Modal closeModal={this.closeModal} currentImage={currentImage} />
        )}
      </section>
    );
  }
}
