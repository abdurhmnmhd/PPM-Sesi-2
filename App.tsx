import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.locationText}>Location</Text>
          <Text style={styles.location}>Nusa Putra, Sukabumi</Text>
        </View>
        <Image
          source={{ uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-snJIFyeL1uZQs0qO9mP6g9LW.png?st=2024-10-01T14%3A23%3A13Z&se=2024-10-01T16%3A23%3A13Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-01T10%3A57%3A29Z&ske=2024-10-02T10%3A57%3A29Z&sks=b&skv=2024-08-04&sig=0msUGkArYqdYFnTOeppCfRNkjcj9EqpHQcPZoThgcoE%3D' }}
          style={styles.avatar}
        />
      </View>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search coffee"
        placeholderTextColor="#888"
      />
      {/* Promo Banner */}
      <View style={styles.promoContainer}>
        <Image
          source={{ uri: 'https://fore.coffee/wp-content/uploads/2022/11/jeniscoffee.jpg' }}
          style={styles.promoImage}
        />
        <View style={styles.promoBadge}>
          <Text style={styles.promoBadgeText}>Promo</Text>
        </View>
        <View style={styles.promoTextContainer}>
          <Text style={styles.promoText}>Buy one get one FREE</Text>
        </View>
      </View>
      {/* Coffee Categories */}
      <ScrollView horizontal style={styles.categoriesContainer}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButtonInactive}>
          <Text style={styles.categoryButtonText}>Macchiato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButtonInactive}>
          <Text style={styles.categoryButtonText}>Latte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButtonInactive}>
          <Text style={styles.categoryButtonText}>Affogato</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* Coffee Items */}
      <ScrollView contentContainerStyle={styles.itemsContainer}>
        {/* Coffee Item 1 */}
        <View style={styles.item}>
          <Image
            source={{ uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-dj6GXQzMKK3vWykaLO62HlOg.png?st=2024-10-01T14%3A23%3A19Z&se=2024-10-01T16%3A23%3A19Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-01T02%3A24%3A02Z&ske=2024-10-02T02%3A24%3A02Z&sks=b&skv=2024-08-04&sig=p522m5WazdG/Q10ICH6ioZ/OFQ9Yly8MDvW5u/%2BJv5Q%3D' }}
            style={styles.itemImage}
          />
          <View style={styles.itemRating}>
            <Text style={styles.itemRatingText}>4.8</Text>
            <Text style={styles.itemRatingStar}>★</Text>
          </View>
          <Text style={styles.itemTitle}>Cappuccino</Text>
          <Text style={styles.itemSubtitle}>with Chocolate</Text>
          <View style={styles.itemFooter}>
            <Text style={styles.itemPrice}>$4.53</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Coffee Item 2 */}
        <View style={styles.item}>
          <Image
            source={{ uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-piAeSbccSX3POKAdSkAQaCPS.png?st=2024-10-01T14%3A23%3A15Z&se=2024-10-01T16%3A23%3A15Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-01T14%3A53%3A04Z&ske=2024-10-02T14%3A53%3A04Z&sks=b&skv=2024-08-04&sig=fRUQUMdm7NQKzWt2d7utfrygmo/MgPBuHaJTFajHEKE%3D' }}
            style={styles.itemImage}
          />
          <View style={styles.itemRating}>
            <Text style={styles.itemRatingText}>4.9</Text>
            <Text style={styles.itemRatingStar}>★</Text>
          </View>
          <Text style={styles.itemTitle}>Cappuccino</Text>
          <Text style={styles.itemSubtitle}>with Oat Milk</Text>
          <View style={styles.itemFooter}>
            <Text style={styles.itemPrice}>$3.90</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Coffee Item 3 */}
        <View style={styles.item}>
          <Image
            source={{ uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-6czfC9ITJ3RES7afHDXp5Tzc.png?st=2024-10-01T14%3A23%3A16Z&se=2024-10-01T16%3A23%3A16Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-30T18%3A17%3A41Z&ske=2024-10-01T18%3A17%3A41Z&sks=b&skv=2024-08-04&sig=zA5nrifvEdOQOp9FYL7dkLjLlYDpUebTfvsHe2F37Gc%3D' }}
            style={styles.itemImage}
          />
          <View style={styles.itemRating}>
            <Text style={styles.itemRatingText}>4.5</Text>
            <Text style={styles.itemRatingStar}>★</Text>
          </View>
          <Text style={styles.itemTitle}>Latte</Text>
          <Text style={styles.itemSubtitle}>Art</Text>
          <View style={styles.itemFooter}>
            <Text style={styles.itemPrice}>$4.00</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Coffee Item 4 */}
        <View style={styles.item}>
          <Image
            source={{ uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-aMeVTLNlUhP2w291tnZJPb0b.png?st=2024-10-01T14%3A23%3A14Z&se=2024-10-01T16%3A23%3A14Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-30T17%3A40%3A58Z&ske=2024-10-01T17%3A40%3A58Z&sks=b&skv=2024-08-04&sig=fnEt1FyKSkxvoidxSia3f0h%2BnL3SJ8TZYvJfTitZjXU%3D' }}
            style={styles.itemImage}
          />
          <View style={styles.itemRating}>
            <Text style={styles.itemRatingText}>4.0</Text>
            <Text style={styles.itemRatingStar}>★</Text>
          </View>
          <Text style={styles.itemTitle}>Espresso</Text>
          <Text style={styles.itemSubtitle}>Classic</Text>
          <View style={styles.itemFooter}>
            <Text style={styles.itemPrice}>$3.50</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a202c',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationText: {
    color: '#a0aec0',
    fontSize: 12,
  },
  location: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBar: {
    backgroundColor: '#2d3748',
    color: '#fff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  promoContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  promoImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  promoBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#e53e3e',
    padding: 4,
    borderBottomRightRadius: 8,
  },
  promoBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  promoTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 16,
  },
  promoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: '#ed8936',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginRight: 8,
  },
  categoryButtonInactive: {
    backgroundColor: '#2d3748',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginRight: 8,
  },
  categoryButtonText: {
    color: '#fff',
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#2d3748',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '48%',
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemRatingText: {
    color: '#a0aec0',
    fontSize: 12,
  },
  itemRatingStar: {
    color: '#f6ad55',
    fontSize: 12,
  },
  itemTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemSubtitle: {
    color: '#a0aec0',
    fontSize: 12,
    marginBottom: 8,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemPrice: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#ed8936',
    borderRadius: 16,
    padding: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;

