import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'alannorman00',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://www.rappler.com/tachyon/2022/02/demon-slayer-season-three.jpg',
    caption: 'Need the new season!!',
  },
  {
    id: '124',
    username: 'alannorman00',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/JzL1NLQvok7Pghe9W5PP2XNV.png',
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
