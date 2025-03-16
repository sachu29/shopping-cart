export const fetchProducts = async ({query}) => {
  try {
    const response = await fetch(`https://dummyjson.com/products${query ? query : ''}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
    } catch (error) {
        console.error('Fetch Error:', error);
        throw error;
    }
};


export const fetchCategory = async (category) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
    } catch (error) {
        console.error('Fetch Error:', error);
        throw error;
    }
}
