const API_URL = process.env.TAGSA_API_URL;


export const getMoreImages = async (nextCursor) =>{
    const params = new URLSearchParams();

    if(nextCursor)
    {
        params.append('next_cursor',nextCursor)
    }

    const response = await fetch(`https://tagsa-api.herokuapp.com/photos/getAllPhotos?${params}`);
    const responseJson = await response.json();

    return responseJson;
}

export const getUserInfo = async () =>{
    const response = await fetch(`https://tagsa-api.herokuapp.com/users/Atrigan23`);
    const responseJson = await response.json();

    return responseJson;
}

export const searchImages = async(searchValue, nextCursor) => {
    const params = new URLSearchParams();
    params.append(`expression`, searchValue)

    if(nextCursor){
        params.append('next_cursor',nextCursor)
    }

    const response = await fetch(`${API_URL}/searchPhoto?${params}`)
    const responseJson = await response.json();

    return responseJson;
}