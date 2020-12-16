import React from "react";
import "../styles/AllPlaces.css";
import { Link } from "react-router-dom";
import PlacesService from "../services/PlacesService";
import "./AllPlaces.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AllPlaces extends React.Component {
  state = {
    whatToSee: [],
    whatToSeeClicked: true,
    editorsChoice: [],
    editorsChoiceClicked: false,
    hiddenGems: [],
    hiddenGemsClicked: false,
    japaneseArchitecture: [],
    japaneseArchitectureClicked: false,
    topTouristAttractions: [],
    topTouristAttractionsClicked: false,
    mustVisitReligiousPlaces: [],
    mustVisitReligiousPlacesClicked: false,
    popularShoppingPlaces: [],
    popularShoppingPlacesClicked: false,
    mustVisitHistoricalPlaces: [],
    mustVisitHistoricalPlacesClicked: false,
    mustSeeBuddhistMonuments: [],
    mustSeeBuddhistMonumentsClicked: false,
  };
  service = new PlacesService();
  componentDidMount() {
    this.service
      .getJapaneseArchitecturePois()
      .then((response) => {
        this.setState({
          japaneseArchitecture: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getWhatToSeePois()
      .then((response) => {
        this.setState({
          whatToSee: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getEditorsChoice()
      .then((response) => {
        this.setState({
          editorsChoice: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getHiddenGems()
      .then((response) => {
        this.setState({
          hiddenGems: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getTopTouristAttractions()
      .then((response) => {
        this.setState({
          topTouristAttractions: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getMustVisitReligiousPlaces()
      .then((response) => {
        this.setState({
          mustVisitReligiousPlaces: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getPopularShoppingPlaces()
      .then((response) => {
        this.setState({
          popularShoppingPlaces: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getMustVisitHistoricalPlaces()
      .then((response) => {
        this.setState({
          mustVisitHistoricalPlaces: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getMustSeeBuddhistMonuments()
      .then((response) => {
        this.setState({
          mustSeeBuddhistMonuments: response,
        });
      })
      .catch((err) => console.error(err));
  }

  whatToSeeChange = () => {
    this.setState({
      whatToSeeClicked: !this.state.whatToSeeClicked,
    });
  };

  editorsChoiceChange = () => {
    this.setState({
      editorsChoiceClicked: !this.state.editorsChoiceClicked,
    });
  };

  hiddenGemsChange = () => {
    this.setState({
      hiddenGemsClicked: !this.state.hiddenGemsClicked,
    });
  };

  japaneseArchitectureChange = () => {
    this.setState({
      japaneseArchitectureClicked: !this.state.japaneseArchitectureClicked,
    });
  };

  topTouristAttractionsChange = () => {
    this.setState({
      topTouristAttractionsClicked: !this.state.topTouristAttractionsClicked,
    });
  };

  mustVisitReligiousPlacesChange = () => {
    this.setState({
      mustVisitReligiousPlacesClicked: !this.state
        .mustVisitReligiousPlacesClicked,
    });
  };

  popularShoppingPlacesChange = () => {
    this.setState({
      popularShoppingPlacesClicked: !this.state.popularShoppingPlacesClicked,
    });
  };

  mustVisitHistoricalPlacesChange = () => {
    this.setState({
      mustVisitHistoricalPlacesClicked: !this.state
        .mustVisitHistoricalPlacesClicked,
    });
  };

  mustSeeBuddhistMonumentsChange = () => {
    this.setState({
      mustSeeBuddhistMonumentsClicked: !this.state
        .mustSeeBuddhistMonumentsClicked,
    });
  };

  renderJapaneseArchitecturePois = () => {
    return this.state.japaneseArchitecture.places.map((poi, index) => {
      return (
        <div className="column is-3">
          <Link
            to={`/all-places/${this.state.japaneseArchitecture.places[index].id}`}
            key={index}
          >
            <div className="card">
              <div className="card-image">
                <figure className="image is-5by4">
                  <img src={poi.thumbnail_url} alt={poi.name_en} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{poi.name_local}</p>
                    <p className="subtitle is-6">{poi.name_en}</p>
                  </div>
                </div>

                <div className="content">
                  <p>Region: {poi.name_suffix}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  renderWhatToSeePois = () => {
    return this.state.whatToSee.places.map((poi, index) => {
      return (
        <div className="column is-3">
          <Link
            to={`/all-places/${this.state.whatToSee.places[index].id}`}
            key={index}
          >
            <div className="card">
              <div className="card-image">
                <figure className="image is-5by4">
                  <img src={poi.thumbnail_url} alt={poi.name_en} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{poi.name_local}</p>
                    <p className="subtitle is-6">{poi.name_en}</p>
                  </div>
                </div>

                <div className="content">
                  <p>Region: {poi.name_suffix}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  renderEditorsChoicePois = () => {
    return this.state.editorsChoice.places.map((poi, index) => {
      // console.log(this.state.whatToSee.places);
      return (
        <div className="column is-3">
          <Link
            to={`/all-places/${this.state.editorsChoice.places[index].id}`}
            key={index}
          >
            <div className="card">
              <div className="card-image">
                <figure className="image is-5by4">
                  <img src={poi.thumbnail_url} alt={poi.name_en} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{poi.name_local}</p>
                    <p className="subtitle is-6">{poi.name_en}</p>
                  </div>
                </div>

                <div className="content">
                  <p>Region: {poi.name_suffix}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  renderHiddenGemsPois = () => {
    return this.state.hiddenGems.places.map((poi, index) => {
      return (
        <div className="column is-3">
          <Link
            to={`/all-places/${this.state.hiddenGems.places[index].id}`}
            key={index}
          >
            <div className="card">
              <div className="card-image">
                <figure className="image is-5by4">
                  <img src={poi.thumbnail_url} alt={poi.name_en} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{poi.name_local}</p>
                    <p className="subtitle is-6">{poi.name_en}</p>
                  </div>
                </div>

                <div className="content">
                  <p>Region: {poi.name_suffix}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  renderTopTouristAttractionsPois = () => {
    return this.state.topTouristAttractions.places.map((poi, index) => {
      return (
        <div className="column is-3">
          <Link
            to={`/all-places/${this.state.topTouristAttractions.places[index].id}`}
            key={index}
          >
            <div className="card">
              <div className="card-image">
                <figure className="image is-5by4">
                  <img src={poi.thumbnail_url} alt={poi.name_en} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{poi.name_local}</p>
                    <p className="subtitle is-6">{poi.name_en}</p>
                  </div>
                </div>

                <div className="content">
                  <p>Region: {poi.name_suffix}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  renderMustVisitReligiousPlacesPois = () => {
    return this.state.mustVisitReligiousPlaces.places.map((poi, index) => {
      console.log(this.state.mustVisitReligiousPlaces.places);
      return (
        <div className="column is-3">
          <Link
            to={`/all-places/${this.state.mustVisitReligiousPlaces.places[index].id}`}
            key={index}
          >
            <div className="card">
              <div className="card-image">
                <figure className="image is-5by4">
                  <img src={poi.thumbnail_url} alt={poi.name_en} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{poi.name_local}</p>
                    <p className="subtitle is-6">{poi.name_en}</p>
                  </div>
                </div>

                <div className="content">
                  <p>Region: {poi.name_suffix}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  renderPopularShoppingPlacesPois = () => {
    return this.state.popularShoppingPlaces.places.map((poi, index) => {
      return (
        <div className="column is-3">
          <Link
            to={`/all-places/${this.state.popularShoppingPlaces.places[index].id}`}
            key={index}
          >
            <div className="card">
              <div className="card-image">
                <figure className="image is-5by4">
                  <img src={poi.thumbnail_url} alt={poi.name_en} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{poi.name_local}</p>
                    <p className="subtitle is-6">{poi.name_en}</p>
                  </div>
                </div>

                <div className="content">
                  <p>Region: {poi.name_suffix}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  renderMustVisitHistoricalPlacesPois = () => {
    return this.state.mustVisitHistoricalPlaces.places.map((poi, index) => {
      return (
        <div className="column is-3">
          <Link
            to={`/all-places/${this.state.mustVisitHistoricalPlaces.places[index].id}`}
            key={index}
          >
            <div className="card">
              <div className="card-image">
                <figure className="image is-5by4">
                  <img src={poi.thumbnail_url} alt={poi.name_en} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{poi.name_local}</p>
                    <p className="subtitle is-6">{poi.name_en}</p>
                  </div>
                </div>

                <div className="content">
                  <p>Region: {poi.name_suffix}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  renderMustSeeBuddhistMonumentsPois = () => {
    return this.state.mustSeeBuddhistMonuments.places.map((poi, index) => {
      return (
        <div className="column is-3">
          <Link
            to={`/all-places/${this.state.mustSeeBuddhistMonuments.places[index].id}`}
            key={index}
          >
            <div className="card">
              <div className="card-image">
                <figure className="image is-5by4">
                  <img src={poi.thumbnail_url} alt={poi.name_en} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{poi.name_local}</p>
                    <p className="subtitle is-6">{poi.name_en}</p>
                  </div>
                </div>

                <div className="content">
                  <span className="has-text-info"> Region:</span>{" "}
                  {poi.name_suffix}
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  renderLoadingImage = () => {
    return (
      <progress className="progress is-large is-info mt-5" max="100">
        60%
      </progress>
    );
  };
  render() {
    return (
      <div>
        <section id="places-head" className="hero">
          <div className="hero-body mb-6">
            <div className="container has-text-centered">
              <div className="columns">
                <div className="column is-one-third is-offset-one-third">
                  <div className="content embossed-circle-places">
                    <div className="circle-content">
                      <h2 className="title is-3 has-text-white is-size-4-mobile">
                        Japan awaits
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="places-bg" className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns is-multiline">
                <div className="column is-3">
                  <article className="media">
                    <figure className="media-left">
                      <p className="is-large">
                        <FontAwesomeIcon icon="search-location" size="2x" />
                      </p>
                    </figure>
                    <div className="media-content">
                      <div className="content has-text-left">
                        <p className="mt-1">
                          <strong></strong>
                        </p>
                        <div className="mt-4">
                          <label className="form-switch">
                            <input
                              type="checkbox"
                              checked={this.state.whatToSeeClicked}
                              onClick={() => this.whatToSeeChange()}
                            />
                            <i />
                            What to see
                          </label>
                        </div>
                        <div className="mt-2">
                          <label className="form-switch">
                            <input
                              type="checkbox"
                              onClick={() => this.editorsChoiceChange()}
                            />
                            <i />
                            Editor's choice
                          </label>
                        </div>
                        <div className="mt-2">
                          <label className="form-switch">
                            <input
                              type="checkbox"
                              onClick={() => this.hiddenGemsChange()}
                            />
                            <i />
                            Hidden gems
                          </label>
                        </div>
                        <div className="mt-2">
                          <label className="form-switch">
                            <input
                              type="checkbox"
                              onClick={() => this.japaneseArchitectureChange()}
                            />
                            <i />
                            Architecture
                          </label>
                        </div>
                        <div className="mt-2">
                          <label className="form-switch">
                            <input
                              type="checkbox"
                              onClick={() => this.topTouristAttractionsChange()}
                            />
                            <i />
                            Tourist attractions
                          </label>
                        </div>
                        <div className="mt-2">
                          <label className="form-switch">
                            <input
                              type="checkbox"
                              onClick={() =>
                                this.mustVisitReligiousPlacesChange()
                              }
                            />
                            <i />
                            Religious places
                          </label>
                        </div>
                        <div className="mt-2">
                          <label className="form-switch">
                            <input
                              type="checkbox"
                              onClick={() => this.popularShoppingPlacesChange()}
                            />
                            <i />
                            Shopping places
                          </label>
                        </div>
                        <div className="mt-2">
                          <label className="form-switch">
                            <input
                              type="checkbox"
                              onClick={() =>
                                this.mustVisitHistoricalPlacesChange()
                              }
                            />
                            <i />
                            Historical places
                          </label>
                        </div>
                        <div className="mt-2">
                          <label className="form-switch">
                            <input
                              type="checkbox"
                              onClick={() =>
                                this.mustSeeBuddhistMonumentsChange()
                              }
                            />
                            <i />
                            Buddhist monuments
                          </label>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
               

                {this.state.whatToSeeClicked
                  ? this.state.whatToSee.length === 0
                    ? this.renderLoadingImage()
                    : this.renderWhatToSeePois()
                  : null}

                {this.state.editorsChoiceClicked
                  ? this.state.editorsChoice.length === 0
                    ? this.renderLoadingImage()
                    : this.renderEditorsChoicePois()
                  : null}

                {this.state.hiddenGemsClicked
                  ? this.state.hiddenGems.length === 0
                    ? this.renderLoadingImage()
                    : this.renderHiddenGemsPois()
                  : null}

                {this.state.japaneseArchitectureClicked
                  ? this.state.japaneseArchitecture.length === 0
                    ? this.renderLoadingImage()
                    : this.renderJapaneseArchitecturePois()
                  : null}

                {this.state.topTouristAttractionsClicked
                  ? this.state.topTouristAttractions.length === 0
                    ? this.renderLoadingImage()
                    : this.renderTopTouristAttractionsPois()
                  : null}

                {this.state.mustVisitReligiousPlacesClicked
                  ? this.state.mustVisitReligiousPlaces.length === 0
                    ? this.renderLoadingImage()
                    : this.renderMustVisitReligiousPlacesPois()
                  : null}

                {this.state.popularShoppingPlacesClicked
                  ? this.state.popularShoppingPlaces.length === 0
                    ? this.renderLoadingImage()
                    : this.renderPopularShoppingPlacesPois()
                  : null}

                {this.state.mustVisitHistoricalPlacesClicked
                  ? this.state.mustVisitHistoricalPlaces.length === 0
                    ? this.renderLoadingImage()
                    : this.renderMustVisitHistoricalPlacesPois()
                  : null}

                {this.state.mustVisitHistoricalPlacesClicked
                  ? this.state.mustVisitHistoricalPlaces.length === 0
                    ? this.renderLoadingImage()
                    : this.renderMustVisitHistoricalPlacesPois()
                  : null}

                {this.state.mustSeeBuddhistMonumentsClicked
                  ? this.state.mustSeeBuddhistMonuments.length === 0
                    ? this.renderLoadingImage()
                    : this.renderMustSeeBuddhistMonumentsPois()
                  : null}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default AllPlaces;