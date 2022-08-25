import { View, Text } from "react-native";
import { useState } from "react";
import { Title, EthPrice } from "./SubInfo";
import { COLORS, SHADOWS, SIZES, FONT, assets, FONTS } from "../constants";

const DetailsDesc = ({ items }) => {
  const [description, setDescription] = useState(
    items.description.slice(0, 100)
  );
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title
          title={items.name}
          titleSize={SIZES.extraLarge}
          subTitle={items.creator}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={items.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {description}
            {!readMore && "..."}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
                lineHeight: SIZES.large,
              }}
              onPress={() => {
                if (!readMore) {
                  setDescription(items.description);
                  setReadMore(true);
                } else {
                  setDescription(items.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
