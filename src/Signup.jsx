export function Signup() {
  return (
    <div>
      <h1>Sign up here!</h1>
      <form method="POST" action="http://localhost:3000/users.json">
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password Confirmation:
          <input name="password_confirmation" type="password" />
        </div>
        <button>Sign up!</button>
      </form>
    </div>
  );
}
