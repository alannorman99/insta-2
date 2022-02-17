import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'alannorman00',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'This is nutty!',
  },
  {
    id: '123',
    username: 'alannorman00',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'This is nutty!',
  },
]

function Posts() {
  return (
    <div>
      {/* Post */}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
