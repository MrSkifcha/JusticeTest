import React, {useState} from 'react';
import "./content.scss";
import PostItem from "./PostItem";
import Filter from "./filter";

const Content = () => {
    const [posts, setPosts] = useState([]);
    const [name, setName] = useState("");
    const [activeName, setActiveName] = useState("Список");
    const [buttons, setButtons] = useState([
        { name: "Список", active: true },
        { name: "Напоминание", active: false },
        { name: "Ещё", active: false }
    ]);

    const addNewPost = () => {
        if(name !== "") {
            const newPost = {
                type: activeName,
                id: Date.now(),
                name
            };
            setPosts([...posts, newPost])
        }

    };

    const filterArr = (e) => {
        if (activeName !== e.target.id) {
            setActiveName(e.target.id);

            setButtons(
                buttons.map((button => {
                    if (button.name === e.target.id) {
                        button.active = true
                    } else {
                        button.active = false
                    }
                    return button;
                }))
            );
        }
    }

    return (
        <div className="container-content">
            <div className="content">
                <Filter
                    onClick={filterArr}
                    buttons={buttons}
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
                        if ((post.type === activeName) || (activeName === "Список")) {
                            return <PostItem post={post} key={post.id}/>
                        }
                    }
                )}
            </div>
        </div>
    );
};

export default Content;
