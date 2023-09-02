import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import HomePage from "./src/pages/HomePage";
import ProductAdd from "./src/pages/Product";
import NotFoundPage from "./src/pages/NotFoundPage";
import { render, router } from "./src/utilities";
import AboutPage from "./src/pages/AboutPage";
import ContactPage from "./src/pages/ContactPage";
import AdminProductAddPage from "./src/pages/admin/AdminProductAddPage";
import AdminStudentEditPage from "./src/pages/admin/AdminProductEditPage";

const app = document.querySelector('#app');

router.on('/', () => render(HomePage, app));
router.on('/about', () => render(AboutPage, app))
router.on('/products', () => render(ProductAdd, app))
router.on('/contact', () => render(ContactPage, app))

// Admin 
router.on('/admin/student/add', () => render(AdminProductAddPage, app))
router.on('/admin/student/:id/edit', ({data}) => render(() => AdminStudentEditPage(data),app));

router.notFound(() => render(NotFoundPage, app));
router.resolve();

