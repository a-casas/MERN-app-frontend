<section class="hero is-medium is-bold">
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column">
                  First column
                  <p className="title is-4">{this.state.place.name_local}</p>
                  <p className="title is-4">Name: {this.state.place.name_en}</p>
                  <p className="title is-4">
                    Location: {this.state.place.name_suffix}
                  </p>
                  <p className="title is-4">{this.state.place.description}</p>
                </div>
                <div class="column">
                  Second column
                  <div>
                    <figure class="image is-5by4">
                      <img
                        src={this.state.place.main_media.media[0].url}
                        alt={this.state.place.name_en}
                      />
                    </figure>
                  </div>
                  <p>
                    <a
                      href={
                        this.state.place.main_media.media.attribution.title_url
                      }
                    >
                      Photo Attribution
                    </a>
                  </p>
                  <p>Tags: {this.state.place.tag_keys} </p>
                  <p>Admission: {this.state.place.admission} </p>
                  <p>Recommendations: {this.state.place.opening_hours_note} </p>
                  <p>Phone: {this.state.place.phone} </p>
                  <p>Address: {this.state.place.address} </p>
                  <p>
                    Official Website:{" "}
                    <a href={this.state.place.references[1].url}>
                      {this.state.place.references[1].url}
                    </a>{" "}
                  </p>
                  {this.renderButtons()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>





      {
        "status_code": 200,
        "data": {
            "place": {
                "id": "poi:19967",
                "level": "poi",
                "rating": 1.4939954256808,
                "rating_local": 1.7697607295797015,
                "quadkey": "133002112310222103022",
                "location": {
                    "lat": 35.6824316,
                    "lng": 139.7530019
                },
                "bounding_box": {
                    "south": 35.6782514,
                    "west": 139.7452344,
                    "north": 35.6894596,
                    "east": 139.7564296
                },
                "name": "Tokyo Imperial Palace",
                "name_suffix": "Tokyo, Japan",
                "name_local": "宮殿",
                "name_en": "Tokyo Imperial Palace",
                "name_translated": "Tokyo Imperial Palace",
                "url": "https://go.sygic.com/travel/place?id=poi:19967",
                "duration_estimate": 5400,
                "marker": "sightseeing-castle",
                "class": {
                    "slug": "sightseeing:castle",
                    "name": "Castle"
                },
                "categories": [
                    "hiking",
                    "sightseeing"
                ],
                "tag_keys": [
                    "Imperial Palace",
                    "Japanese Architecture",
                    "Free",
                    "Royal Residence",
                    "Royal Palace",
                    "Palace",
                    "Historical",
                    "Cherry Blossom Viewing",
                    "Castle",
                    "Office",
                    "Private"
                ],
                "parents": [
                    {
                        "id": "region:2009424",
                        "name": "Kantō region",
                        "level": "region"
                    },
                    {
                        "id": "city:865324",
                        "name": "Chūō, Tokyo",
                        "level": "city"
                    },
                    {
                        "id": "city:729274",
                        "name": "Bunkyō",
                        "level": "city"
                    },
                    {
                        "id": "city:846468",
                        "name": "Chiyoda, Tokyo",
                        "level": "city"
                    },
                    {
                        "id": "region:465",
                        "name": "東京都",
                        "level": "region"
                    },
                    {
                        "id": "city:2585",
                        "name": "Tokyo",
                        "level": "city"
                    },
                    {
                        "id": "poi:36125237",
                        "name": "Honshu",
                        "level": "island"
                    },
                    {
                        "id": "poi:36368651",
                        "name": "日本列島",
                        "level": "archipelago"
                    },
                    {
                        "id": "country:75",
                        "name": "Japan",
                        "level": "country"
                    },
                    {
                        "id": "continent:4",
                        "name": "Asia",
                        "level": "continent"
                    }
                ],
                "perex": "The stunning residence of the Japanese emperor located on the former site of Edo Castle.",
                "customer_rating": null,
                "hotel_star_rating": null,
                "hotel_star_rating_unofficial": null,
                "thumbnail_url": "https://media-cdn.sygictraveldata.com/media/poi:19967",
                "tags": [
                    {
                        "key": "Imperial Palace",
                        "name": "Imperial Palace"
                    },
                    {
                        "key": "Japanese Architecture",
                        "name": "Japanese Architecture"
                    },
                    {
                        "key": "Free",
                        "name": "Free"
                    },
                    {
                        "key": "Royal Residence",
                        "name": "Royal Residence"
                    },
                    {
                        "key": "Royal Palace",
                        "name": "Royal Palace"
                    },
                    {
                        "key": "Palace",
                        "name": "Palace"
                    },
                    {
                        "key": "Historical",
                        "name": "Historical"
                    },
                    {
                        "key": "Cherry Blossom Viewing",
                        "name": "Cherry Blossom Viewing"
                    },
                    {
                        "key": "Castle",
                        "name": "Castle"
                    },
                    {
                        "key": "Office",
                        "name": "Office"
                    },
                    {
                        "key": "Private",
                        "name": "Private"
                    }
                ],
                "area": 789332,
                "address": "1-1 Chiyoda, Tokyo 100-8111, Japan",
                "address_is_approximated": false,
                "address_details": {
                    "country": "Japan",
                    "state": null,
                    "province": "東京都",
                    "city": "千代田区",
                    "postcode": "100-0001",
                    "district": null,
                    "street": null,
                    "place": null,
                    "number": "1"
                },
                "admission": "Free admission.",
                "email": null,
                "timezone": "Asia/Tokyo",
                "opening_hours_note": "It is recommended to make a reservation in advance. Reservations are accepted from the first day of the preceding month to the tour date up to four days before the tour date. They can be made over the Internet.\n\nTours: Mon - Fri: 10 am, 1:30 pm\n\nEast Gardens of the Imperial Palace:\n9 am - 4:30 pm (closes at 5 pm April - Aug, at 4 pm Nov - Feb). Last admission 30 minutes before closing.",
                "is_deleted": false,
                "phone": "0332131111",
                "description": {
                    "text": "The stunning residence of the Japanese emperor located on the former site of Edo Castle. It is an absolute must-see in the city centre - the palace and the large gardens surrounded by moats and stone walls are simply breath-taking. Come and enjoy a taste of nature within the bustling city.\n\nThe palace occupies the site of an old castle, which used to be the seat of the shogun in the 15th century. It only became the seat of the imperial family in the 19th century, when Emperor Meiji moved the imperial household from Kyoto to Tokyo. Most of what remains of the palace today is only about 50 years old though, as the majority of the old buildings were destroyed during the Second World War.\n\nThe beautiful palace gardens, opened to the public in 1968, are freely accessible at all times. They are especially worth the visit in spring when the cherry trees in the gardens start blossoming.\n\nThe interior of the palace can be visited as well, but only with prior reservation or with one of 300 tickets that are given out every day. There are only a few headsets with information in English though.",
                    "provider": null,
                    "translation_provider": null,
                    "link": null,
                    "language_id": "en"
                },
                "opening_hours_raw": null,
                "media_count": 22,
                "main_media": {
                    "usage": {
                        "square": "m:77545",
                        "video_preview": null,
                        "portrait": "m:77545",
                        "landscape": "m:77545"
                    },
                    "media": [
                        {
                            "original": {
                                "size": null,
                                "width": 1947,
                                "height": 1487
                            },
                            "suitability": [
                                "portrait"
                            ],
                            "url_template": "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d383737353435",
                            "created_at": "2015-03-17T16:33:15+0000",
                            "source": {
                                "provider": "wikipedia",
                                "name": "Wikimedia Commons",
                                "external_id": null
                            },
                            "type": "photo",
                            "created_by": null,
                            "url": "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383737353435.jpg",
                            "quadkey": null,
                            "attribution": {
                                "title_url": "http://commons.wikimedia.org/wiki/File:Fujimi-yagura_1.jpg",
                                "license": "CC BY-SA 3.0",
                                "other": null,
                                "author_url": "http://commons.wikimedia.org/wiki/User:WPPilot",
                                "author": "WPPilot",
                                "title": "Fujimi-yagura (Mt Fuji-view Keep) Imperial Palace Tokyo Japan",
                                "license_url": "http://creativecommons.org/licenses/by-sa/3.0"
                            },
                            "location": null,
                            "id": "m:77545"
                        }
                    ]
                },
                "references": [
                    {
                        "id": 14548532,
                        "title": "Wikipedia",
                        "type": "wiki",
                        "language_id": "en",
                        "url": "https://en.wikipedia.org/wiki/Tokyo_Imperial_Palace",
                        "supplier": "wiki",
                        "priority": 0,
                        "currency": null,
                        "price": null,
                        "flags": []
                    },
                    {
                        "id": 13026710,
                        "title": "Official Website",
                        "type": "link:official",
                        "language_id": null,
                        "url": "http://sankan.kunaicho.go.jp/",
                        "supplier": null,
                        "priority": 0,
                        "currency": null,
                        "price": null,
                        "flags": []
                    }
                ],
                "external_ids": [
                    {
                        "id": "en:Tokyo Imperial Palace",
                        "type": "wikipedia",
                        "language_id": "en"
                    },
                    {
                        "id": "Q500681",
                        "type": "wikidata",
                        "language_id": null
                    },
                    {
                        "id": "relation:7676266",
                        "type": "osm",
                        "language_id": null
                    }
                ],
                "collection_count": 0,
                "satellite": null,
                "attributes": null,
                "has_shape_geometry": true
            }
        },
        "server_timestamp": "2020-12-09T09:53:36+00:00"
    }

