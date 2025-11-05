// Find item by ID in the file system tree
export const findItem = (data, id, parent = null) => {
  if (data.id === id) return { item: data, parent };
  
  if (data.children) {
    for (let child of data.children) {
      const result = findItem(child, id, data);
      if (result) return result;
    }
  }
  
  return null;
};

// Search items by name in the file system tree
export const searchItems = (data, term) => {
  const results = [];
  
  const search = (item) => {
    if (item.name.toLowerCase().includes(term.toLowerCase())) {
      results.push(item);
    }
    if (item.children) {
      item.children.forEach(search);
    }
  };
  
  search(data);
  return results;
};

// Validate file/folder name
export const isValidName = (name) => {
  return /^[a-zA-Z0-9._\s-]+$/.test(name);
};