import apiFetch from "@wordpress/api-fetch";
import { registerStore, select } from "@wordpress/data";

export const name = "hmr-demo/block-c";

export const options = {
	title: "Sample Block Data API",

	description: "Render another sample block.",

	icon: "images-alt",

	category: "widgets",

	edit() {
		const DEFAULT_STATE = {
			prices: {},
			discountPercent: 0
		};

		const actions = {
			setPrice(item, price) {
				return {
					type: "SET_PRICE",
					item,
					price
				};
			},

			startSale(discountPercent) {
				return {
					type: "START_SALE",
					discountPercent
				};
			},

			fetchFromAPI(path) {
				return {
					type: "FETCH_FROM_API",
					path
				};
			}
		};

		registerStore("my-shop", {
			reducer(state = DEFAULT_STATE, action) {
				switch (action.type) {
					case "SET_PRICE":
						return {
							...state,
							prices: {
								...state.prices,
								[action.item]: action.price
							}
						};

					case "START_SALE":
						return {
							...state,
							discountPercent: action.discountPercent
						};
				}

				return state;
			},

			actions,

			selectors: {
				getPrice(state, item) {
					const { prices, discountPercent } = state;
					const price = prices[item];

					return price * (1 - 0.01 * discountPercent);
				}
			},

			controls: {
				FETCH_FROM_API(action) {
					return apiFetch({ path: action.path });
				}
			},

			resolvers: {
				*getPrice(state, item) {
					const path = "/wp/v2/prices/" + item;
					const price = yield actions.fetchFromAPI(path);
					return actions.setPrice(item, price);
				}
			}
		});

		return (
			<div>
				<h2>Data API{select("my-shop").getPrice("hammer")}</h2>
			</div>
		);
	},

	save() {
		return (
			<div>
				<h2>Block B!</h2>
			</div>
		);
	}
};
