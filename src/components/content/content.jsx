import React, {useState} from 'react';
import "./content.scss";
import PostItem from "./PostItem";
import Filter from "./filter";

const Content = () => {
    const [posts, setPosts] = useState([

    ]);

    const [name, setName] = useState("")

    const addNewPost = () => {
        const newPost = {
            type: buttons.find(button => button.active).name,
            id: Date.now(),
            name
        }
        setPosts([...posts, newPost])
    }

    let buttons = [
        {name: "Список", active: true},
        {name: "Напоминание", active: false},
        {name: "Ещё", active: false}
    ]

    return (
        <div className="container-content">
            <div className="content">
                <Filter
                    defaultValue="Список"
                    options={buttons}
                />
                <div className="add">
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Введите текст"
                        type="text"
                    />
                    <button onClick={addNewPost}>Добавить +</button>
                </div>
            </div>
            <div className="list-content">
                {posts.map((post) => {
                        return <PostItem post={post} key={post.id}/>
                    }
                )}
            </div>
        </div>
    );
};

export default Content;