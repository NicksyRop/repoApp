import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  Button,
} from "react-native";

const repositories = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
  },
  {
    id: "rails.rails",
    fullName: "rails/rails",
    description: "Ruby on Rails",
    language: "Ruby",
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
  },
  {
    id: "django.django",
    fullName: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    language: "Python",
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
  },
  {
    id: "reduxjs.redux",
    fullName: "reduxjs/redux",
    description: "Predictable state container for JavaScript apps",
    language: "TypeScript",
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
  },
];

const ItemSeparator = () => <View style={styles.separator} />;
const repositoryItem = ({ item }) => (
  <View style={{ backgroundColor: "white", marginBottom: 7, padding: 10 }}>
    <View style={styles.header}>
      <View>
        <Image
          source={{ uri: item.ownerAvatarUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.description}>
        <Text style={{ fontSize: 20, fontFamily: "Robotto-Black" }}>
          {item.fullName}
        </Text>
        <Text style={{ fontFamily: "Robotto-light" }}>{item.description}</Text>
        <Button title={item.language} />
      </View>
    </View>
    <View style={styles.footer}>
      <View>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          {item.stargazersCount}
        </Text>
        <Text>Stars</Text>
      </View>

      <View>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          {item.forksCount}
        </Text>
        <Text>Forks</Text>
      </View>

      <View>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          {item.reviewCount}
        </Text>
        <Text>Reviews</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          {item.ratingAverage}
        </Text>
        <Text>Ratings</Text>
      </View>
    </View>
    {/* 
    
    
   
     */}
  </View>
);

const RepositoryList = () => {
  return (
    <View style={{ margin: 10 }}>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={repositoryItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Robotto-Medium",
  },
  image: {
    width: Dimensions.get("window").width / 2 - 80,
    height: Dimensions.get("window").width / 2 - 80,
    borderRadius: 10,
    marginRight: 15,
  },
  header: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 10,
  },
  description: {
    display: "flex",
    flexWrap: "wrap",
  },
});

export default RepositoryList;
