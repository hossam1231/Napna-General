import { Router, Route, Set } from '@redwoodjs/router'
import ProductsLayout from 'src/layouts/ProductsLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import HomeLayout from 'src/layouts/HomeLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ProductsLayout}>
        <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
        <Route path="/products/{id:Int}/edit" page={ProductEditProductPage} name="editProduct" />
        <Route path="/products/{id:Int}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
      </Set>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set wrap={HomeLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
