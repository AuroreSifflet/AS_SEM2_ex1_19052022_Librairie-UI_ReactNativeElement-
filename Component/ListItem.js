import { ListItem, Avatar } from "@rneui/themed";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ListPeople = () => {
  const list = [
    {
      name: "Buse ALAÇAM",
      avatar: "BA",
      subtitle: "Appli Mobile",
    },
    {
      name: "Louis ALIBERT",
      avatar: "LA",
      subtitle: "Appli Mobile",
    },
    {
      name: "Prem BALAGOUROU",
      avatar: "PB",
      subtitle: "Appli Mobile",
    },
    {
      name: "Romain CHILOT",
      avatar: "RC",
      subtitle: "Appli Mobile",
    },
    {
      name: "Alain DECAYEUX",
      avatar: "AD",
      subtitle: "Appli Mobile",
    },
    {
      name: "Jean GIRARD-REYDET",
      avatar: "JGR",
      subtitle: "Appli Mobile",
    },
    {
      name: "Yannick KAMDEM",
      avatar: "YK",
      subtitle: "Appli Mobile",
    },
    {
      name: "Daniel Ricardo LIMA DA SYLVA",
      avatar: "DRLDS",
      subtitle: "Appli Mobile",
    },
    {
      name: "Lukas MANNONEN",
      avatar: "LM",
      subtitle: "Appli Mobile",
    },
    {
      name: "André MCQUADE",
      avatar: "AM",
      subtitle: "Appli Mobile",
    },
    {
      name: "Kelton SEMEDO DA VEIGA",
      avatar: "KSDV",
      subtitle: "Appli Mobile",
    },
    {
      name: "Aurore SIFFLET",
      avatar: "AS",
      subtitle: "Appli Mobile",
    },
    {
      name: "Bruno SOARES",
      avatar: "BS",
      subtitle: "Appli Mobile",
    },
    {
      name: "Theo SOKOLOWSKY",
      avatar: "TS",
      subtitle: "Appli Mobile",
    },
    {
      name: "Michel TCHA",
      avatar: "MT",
      subtitle: "Appli Mobile",
    },
  ];

  return (
    <View>
      <ScrollView>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar
              size={40}
              rounded
              title={l.avatar}
              containerStyle={{ backgroundColor: "purple" }}
            />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListPeople;
