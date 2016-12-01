![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

#Rails App with Authentication

We're going to build a fully authenticated app that lists winter travel destinations, called Ctrl Alt Delete.

###Create destinations resource

Create your new rails app by running:

```
rails new ctrl_alt_delete -d postgresql
```

Navigate into your newly created folder. We can now create our `destination` model by running:

```
rails g scaffold destinations city country airport avg_temp:float image currency national_drink language
```

This will create a new migration in the `db/migrate` folder. Check the migration file for spelling mistakes.

Create your database by running:

```
rails db:create
```

Run your pending migration by running:

```
rails db:migrate
```

In `db/seeds` add some seed data:

```
ActiveRecord::Base.connection.execute("TRUNCATE destinations RESTART IDENTITY")

Destination.create!([{
	country: "Jamaica",
	city: "Montego Bay",
	airport: "MBJ",
	avg_temp: 28.0,
	currency: "JMD",
	national_drink: "Rum",
	language: "English"
},
{
	country: "Lanzarote",
	city: "Puerto del Carmen",
	airport: "ACE",
	avg_temp: 21.5,
	currency: "EUR",
	national_drink: "Sangria",
	language: "Spanish"
},
{
	country: "Italy",
	city: "Palermo",
	airport: "PMO",
	avg_temp: 21.5,
	currency: "EUR",
	national_drink: "Limoncello",
	language: "Italian"
}])
```

To run the seed file run:

```
rails db:seed
```

To check that this has worked, enter rails console using `rails c`, and then run `Destination.all` and you should see your destinations in the terminal. 

###Create user model

Create the User model by running:

```
rails g model User username email password_digest 
rails db:migrate
```

Navigate to `app/models/user.rb` and add the following validations:

```
class User < ApplicationRecord
	validates :email, presence: true, uniqueness: true
	validates :password_confirmation, presence: true
end
```

In order to add authentication to our app, we need to use the Bcrypt gem. Navigate to your `Gemfile` and uncomment out the line that reads:

```
gem 'bcrypt', '~> 3.1.7'
```

And then in the terminal run `bundle`. 

At the top of the user model, above the validation, add the line:

```
has_secure_password
```

###Create users controller

Create a users controller by running:

```
rails g controller users new create
```

Open up the new controller by going to `app/controllers/users_controller.rb` and add the following:

```
class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      flash[:success] = "Thanks for registering!"
      redirect_to root_path
    else
      render 'new'
    end
  end
  
private
    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
```

Go to `app/views/users/new.html.erb` and delete what's there, and add the following: 

```
<h1>Sign Up</h1>
<%= form_for @user do |f| %>
  <% if @user.errors.any? %>
  <div class="error_messages">
    <h2>Form is invalid</h2>
    <ul>
      <% for message in @user.errors.full_messages %>
      <li><%= message %></li>
      <% end %>
    </ul>
  </div>
  <% end %>

  <div class="field">
    <%= f.label :username %>
    <%= f.text_field :username %>
  </div>
  <div class="field">
    <%= f.label :email %>
    <%= f.text_field :email %>
  </div>
  <div class="field">
    <%= f.label :password %>
    <%= f.password_field :password %>
  </div>
  <div class="field">
    <%= f.label :password_confirmation %>
    <%= f.password_field :password_confirmation %>
  </div>
  <div class="actions">
    <%= f.submit %>
  </div>
<% end %>
```

If you start up the rails server, and navigate to `/users/new` you should get an error. Don't panic, let's fix it.

In Atom navigate to `config/routes`. Update the routes to be:

```
Rails.application.routes.draw do
  root 'destinations#index'
  get '/register', to: 'users#new'
  post '/register', to: 'users#create'

  resources :destinations
end
```

This will set our homepage to be the index page for destinations, and create custom routes for our `/register` `GET` and `POST` actions. 

Inside `views/users/new.html.erb` update the form tag on line 2 to be:

```
<%= form_for @user, url: register_path do |f| %>
```

Test that you can register a user by vising `/register` in the browser, and submitting the new user form. Enter the rails console `rails c` and run `User.all`, and you should see your user in the terminal.

In `app/views/layouts/application.html.erb` add a navbar about the `<%= yield %>` erb tag:

```
<header>
  <nav>
    <ul>
      <li><%= link_to "Home", root_path %></li>
      <li><%= link_to "Register", register_path %></li>
    </ul>
  </nav>
</header>
```

###Make sessions controller

In terminal run:

```
rails g controller sessions new create destroy
```

In `config/routes.rb` remove the newly created sessions routes, and add the following underneath your `/register` routes:

```
get '/login', to: 'sessions#new'
post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'
```

Inside `app/controllers/sessions_controller.rb` update your controller to be:

```
class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: "Welcome back!"
    else
      flash.now.alert = "Invalid login credentials."
      render "new"
    end
  end

  def destroy
    session.delete :user_id
    redirect_to root_path, notice: "Logged out!"
  end
end
```

Inside `app/views/sessions` delete the files for `create` and `delete`. Inside `new.html.erb` add the following: 

```
<h1>Login</h1>
<%= form_tag login_path do %>
  <div class="field">
    <%= label_tag :email %>
    <%= text_field_tag :email %>
  </div>
  <div class="field">
    <%= label_tag :password %>
    <%= password_field_tag :password %>
  </div>
  <div class="actions"><%= submit_tag "Log in" %></div>
<% end %>
```

Inside your header add a link for login: 

```
<li><%= link_to "Login", login_path %></li>
```

In order to render the flash messages that we set up in the controller, add the following underneath your header in `application.html.erb`:

```
<% flash.each do |name, message| %>
  <div class="flash-message flash-message-<%= name %>">
    <%= message %>
  </div>
<% end %>
```

###Helper methods

Now we want to be able to retrieve the users information from inside the cookie.

Inside `app/controllers/application_controller.rb` add:

```
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!current_user
  end
end
```

Now that we can tell whether or not a user is logged in, and we can also tell who our current user is, we can update the menu to be:

```
<ul>
  <li><%= link_to "Home", root_path %></li>
  <% if logged_in? %>
    <li>Hello, <%= current_user.email %></li>
    <li><%= link_to 'Logout', logout_path, method: :delete, data: {confirm: 'Are you sure?'} %></li>
  <% else %>
    <li><%= link_to "Register", register_path %></li>
    <li><%= link_to "Login", login_path %></li>
  <% end %>
</ul>
```

Test that this is working by logging in/logging out in Chrome. Your nav items should hide and show depending on whether you are logged in or not. 

###Restricting routes

Inside the `application_controller.rb` add:

```
def authenticate
  unless logged_in?
    flash[:error] = "You must be logged in to do that!"
    redirect_to login_path
  end
end
```

Open your `destinations_controller` and at the top, underneath `before_action :set destination` add the following:

```
before_action :authenticate
```

This will protect all routes inside the `destinations_controller`. In order to protect only certain routes, modify this line to be:

```
before_action :authenticate, only: [:new, :create, :edit, :update, :destroy]
```

This will only protect the new, create, edit, update and destory routes, but allowed non-logged in users to view the index and show pages for destinations. 

We can still see the links for new, edit and delete. In order to hide these from a non logged in user, we can wrap them in `if` statements. On the index page for destinations wrap the edit and destroy buttons like this:

```
<% if logged_in? %>
  <td><%= link_to 'Edit', edit_destination_path(destination) %></td>
  <td><%= link_to 'Destroy', destination, method: :delete, data: { confirm: 'Are you sure?' } %></td>
<% end %>
```

And on the show page wrap the edit button:

```
<% if logged_in? %>
  <%= link_to 'Edit', edit_destination_path(@destination) %> |
<% end %>
```

Success! You've built a fully authenticated Rails app 💰