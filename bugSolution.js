```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  useEffect(() => {
    console.log('Count:', count);
    //this will only run when count changes
  }, [count]);

  useEffect(() => {
    console.log('Name:', name);
    //this will only run when name changes
  }, [name]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}
```