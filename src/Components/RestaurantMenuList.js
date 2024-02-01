import React from "react";
import RestaurantItemAccordion from "./UI/RestaurantItemAccordion.js";
import { IMG_CDN_URL } from "../config";
import MenuItem from "./MenuItem";
const RestaurantMenuList = ({ restaurantMenu, isVegOnly, addFoodItem }) => {
  return (
    <div>
      {!restaurantMenu[0]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[0]?.card?.card?.title}>
          <ul>
            {restaurantMenu[0]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[0]?.card?.card?.itemCards) &&
              restaurantMenu[0]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}

      {!restaurantMenu[1]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[1]?.card?.card?.title}>
          <ul>
            {restaurantMenu[1]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[1]?.card?.card?.itemCards) &&
              restaurantMenu[1]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}

      {!restaurantMenu[2]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[2]?.card?.card?.title}>
          <ul>
            {restaurantMenu[2]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[2]?.card?.card?.itemCards) &&
              restaurantMenu[2]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}

      {!restaurantMenu[3]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[3]?.card?.card?.title}>
          <ul>
            {restaurantMenu[3]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[3]?.card?.card?.itemCards) &&
              restaurantMenu[3]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}

      {!restaurantMenu[4]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[4]?.card?.card?.title}>
          <ul>
            {restaurantMenu[4]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[4]?.card?.card?.itemCards) &&
              restaurantMenu[4]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}

      {!restaurantMenu[5]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[5]?.card?.card?.title}>
          <ul>
            {restaurantMenu[5]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[5]?.card?.card?.itemCards) &&
              restaurantMenu[5]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}

      {!restaurantMenu[6]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[6]?.card?.card?.title}>
          <ul>
            {restaurantMenu[6]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[6]?.card?.card?.itemCards) &&
              restaurantMenu[6]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}

      {!restaurantMenu[7]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[7]?.card?.card?.title}>
          <ul>
            {restaurantMenu[7]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[7]?.card?.card?.itemCards) &&
              restaurantMenu[7]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}

      {!restaurantMenu[8]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[8]?.card?.card?.title}>
          <ul>
            {restaurantMenu[8]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[8]?.card?.card?.itemCards) &&
              restaurantMenu[8]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}

      {!restaurantMenu[9]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[9]?.card?.card?.title}>
          <ul>
            {restaurantMenu[9]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[9]?.card?.card?.itemCards) &&
              restaurantMenu[9]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}

      {!restaurantMenu[10]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[10]?.card?.card?.title}>
          <ul>
            {restaurantMenu[10]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[10]?.card?.card?.itemCards) &&
              restaurantMenu[10]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}

      {!restaurantMenu[11]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[11]?.card?.card?.title}>
          <ul>
            {restaurantMenu[11]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[11]?.card?.card?.itemCards) &&
              restaurantMenu[11]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}

      {!restaurantMenu[12]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[12]?.card?.card?.title}>
          <ul>
            {restaurantMenu[12]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[12]?.card?.card?.itemCards) &&
              restaurantMenu[12]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}

      {!restaurantMenu[13]?.card?.card?.itemCards ? (
        ""
      ) : (
        <RestaurantItemAccordion title={restaurantMenu[13]?.card?.card?.title}>
          <ul>
            {restaurantMenu[13]?.card?.card?.itemCards &&
              Array.isArray(restaurantMenu[13]?.card?.card?.itemCards) &&
              restaurantMenu[13]?.card?.card?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  item={item}
                  IMG_CDN_URL={IMG_CDN_URL}
                  isVegOnly={isVegOnly}
                  addFoodItem={addFoodItem}
                />
              ))}
          </ul>
        </RestaurantItemAccordion>
      )}
    </div>
  );
};

export default RestaurantMenuList;
