## Routing

1. Go to `app-routing.module.ts` file, it should have import `RouterModule` and `Routes` from `@angular/router`.
2. Add `RouterModule.forRoot(routes)` in `imports` array.
3. Create a `Routes` array, and add the routes.
4. Such as `{ path: 'rooms', component: RoomsComponent },`.
5. In `app.component.html`, add `<router-outlet></router-outlet>`.
6. `{ path: '', redirectTo: '/rooms', pathMatch: 'full' },` - what this means is that if the path is empty, redirect to `/rooms` path.
<br><br>

- When providing the anchor links, use `routerLink` instead of `href`.
- If we use `href`, it will reload the whole page and as a Single Page Application we don't need that, but if we use `routerLink`, it will not reload the page.
- When there is some routing component, Angular looks for `<router-outlet></router-outlet>`, it will render the component that is specified in the route right after this `<router-outlet>` tag. If this is not present, Angular won't be able to render the component.
<br><br>

### Wildcard Route/ 404 Page
- When we go to random URL, we should add a 404 page, now we are getting a blank page.
- It is called `wildcard route`, and it should be the last route in the array.
- `{ path: '**', component: PageNotFoundComponent }`. This will match **any** URL that was not matched before.


### Dynamic Routes
- Dynamic routes are routes that have some parameters.
- We can't make pages for every single room, so we can make a dynamic route.
- We can add dynamic routes, such as `/rooms/:id`.
- In `app-routing.module.ts`, add `{ path: 'rooms/:id', component: RoomsBookingComponent }`.
- In `rooms-list.component.html`, add `routerLink="/rooms/{{room.roomNumber}}"` or `[routerLink]="['/rooms', room.roomNumber]">`.


- By default, the routerlink appends the path to the current URL, so if we use `[routerLink]="['rooms', room.roomNumber]"`, it will append the path to the current URL giving us `http://localhost:4200/rooms/rooms/1`.
- but if we want to replace the current URL, we can use `[routerLink]="['/rooms', room.roomNumber]"` giving us `http://localhost:4200/rooms/1`.


### ActivatedRoute Service
- Now we have to get the `id` from the URL, so we can use `ActivatedRoute` Service from `@angular/router`.
- It allows us to get the parameters from the URL, basically read the router data.
- It allows access to snapshot of the route, and also allows access to data from Route Config.
- It already exists so we don't have to import it.
- In `rooms-booking.component.ts`, add `constructor(private route: ActivatedRoute) { }`.
- In `ngOnInit()`, add `console.log(this.route.params)`, and we can see that it is an `Observable`. It gives `_value: {id: "3"}`. This comes from the path `rooms/:id` we specified in `app-routing.module.ts`.

- We can subscribe to this `Observable` and get the `id` from the URL.
- There is also `snapshot` property, which gives us the current value of the `Observable` which is a representation of any set of values over any amount of time.
- But this is not recommended, because it will not update if the URL changes.
- We can use `pipe`, this can take `map` operator, which will take the `params` and return the `roomid`.
- If we have multiple parameters, we can use `paramMap` instead of `params`, and we can use `get()` method to get the `roomid`.


## Template Driven Forms


### Create a subcomponent
- Go to `rooms` folder, and create a new component, such as `room-booking`.
- We can create a subcomponent, such as `rooms-booking` component.
- This component will be created in the `rooms` component.


## Bootstrap
- In `angular.json` file, add `"node_modules/bootstrap/dist/css/bootstrap.min.css"` in `styles` array.
- Add `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We">
  ` in `index.html` file.

## Angular Material 
- Stop server
- `ng add @angular/material`
- ```<link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">```
gets added to index.html file.


### Creating a nav bar
- Go to Schematics page - https://material.angular.io/guide/schematics
- And here `https://material.angular.io/guide/schematics#navigation-schematic`, we can see that we can use `ng generate @angular/material:navigation` to generate the entire navigation component. We don't need to do it manually.
- Now we can use the tag of the newly created component in `app.component.html` file.
- Change the links and content in the `app-nav.component.html` file.
- And where it says 'Add your content here', we can add the `<router-outlet></router-outlet>` tag.
