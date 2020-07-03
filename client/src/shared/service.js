export const fetchCurrList = async (listName) => {
    const response = await fetch(`http://localhost:80/dev/suppliers_catalogue_ms/server/api/${listName}/readAll`);
    return  await response.json();
}