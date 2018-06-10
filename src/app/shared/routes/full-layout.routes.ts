import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../../auth/signup/signup.component';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'changelog',
    loadChildren: './changelog/changelog.module#ChangeLogModule'
  },
  {
    path: 'full-layout',
    loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule'
  },
  {
    path: 'tour-operators/profile',
    loadChildren: './tour-operators/tour-operators/tour-operators.module#TourOperatorsModule'
  },
  {
    path: 'auth/sign-up',
    loadChildren: './auth/auth/auth.module#AuthModule'
  },
  {
    path: 'market-place',
    loadChildren: './market-place/market-place.module#MarketPlaceModule'
  },
  {
    path: 'inventory',
    loadChildren: './inventory/inventory.module#InventoryModule'
  },
  {
    path: 'bookings',
    loadChildren: './bookings/bookings.module#BookingsModule'
  }



];