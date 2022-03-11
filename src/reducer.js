export default function reducer(state, action) {
    console.log('entrou reducer')
    switch (action.type) {
        
        case 'CRIAR_POST':
            const newPost = action.payload.post;
            console.log('criando post')
            return { ...state, posts: [newPost, ...state.posts] };

        case 'DELETAR_POST':
            return 0;

        default:
            return state;
    }
    
}