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
    elevation: 3,
  },

  rowContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginVertical: 8,
},

halfInput: {
  flex: 1,
  marginHorizontal: 10,
  maxWidth: '45%',             
},

halfButton: {
  flex: 1,
  marginHorizontal: 10,
  maxWidth: '45%',
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
     width: 60,               
    height: 40,
    paddingVertical: 10,
    borderRadius: 8,
    margin: 6,
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
    fontFamily: 'Times New Roman',
    
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

 


  headerText: {
    fontSize: 22,
  fontWeight: '700',
  color: '#4C7EFF',      
  textAlign: 'center',
  marginBottom: 10, 
  },

  itemRow: {
  flexDirection: 'row',      
  alignItems: 'center',      // vertically centers 
  justifyContent: 'space-between', 
  backgroundColor: '#fff',
  padding: 10,
  borderRadius: 8,
  elevation: 1,
},
});



