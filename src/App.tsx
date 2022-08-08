import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import { Comment } from "./components/Comment"
import styles from "./App.module.css"
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/pedrohjleite.png',
      name: 'Pedro Leite',
      role: 'Co-founder adStart'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys!', },
      { type: 'paragraph', content: `I just uploaded another project to my portifolio. It's a project I made using React in a Developers event. The name of the project is DoctorCare 🚀` },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#newproject #webdevelopment' }
    ],
    publishedAt: new Date('2022-08-01 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys!', },
      { type: 'paragraph', content: `I just uploaded another project to my portifolio. It's a project I made using React in a Developers event. The name of the project is DoctorCare 🚀` },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#newproject #webdevelopment' }
    ],
    publishedAt: new Date('2022-08-04 10:00:00'),
  },
];



function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App
