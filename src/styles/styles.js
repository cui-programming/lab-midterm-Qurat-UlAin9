import { StyleSheet } from 'react-native';

/**
 * 👉 Students: create all your styles here.
 * Start with: container, headerText, sectionTitle, itemRow, itemName, counter, input, button, etc.
 * Keep style names semantic.
 */
export const styles = StyleSheet.create({
  // e.g., container: { },
  // leave empty for now; using undefined styles is acceptable.
  // Main app container
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

 
  section: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },


  textInput: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },


  text: {
    fontSize: 16,
    color: '#333',
    marginVertical: 4,
  },

 
  smallText: {
    fontSize: 13,
    color: '#666',
  },


  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

   header: {
    width: '100%',
    backgroundColor: '#4C7EFF',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 15,
  },


  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 1,
  },
});



