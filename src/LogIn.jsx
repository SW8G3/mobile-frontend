import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { loginUser, registerUser } from './API/AuthAPI';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/admin');
  }, [navigate]);

  const handleRegister = async () => {
    setMessage('');
    setMessageColor('');
    try {
      await registerUser(username, password);
      setMessage('Registration successful! You can now log in.');
      setMessageColor('green');
      setUsername('');
      setPassword('');
    } catch (err) {
      setMessage(
        err.response?.data?.message || 'Registration failed. Please try again.'
      );
      setMessageColor('red');
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageColor('');
    try {
      const data = await loginUser(username, password);
      localStorage.setItem('token', data.token);
      navigate('/admin');
    } catch (err) {
      setMessage(err || 'Login failed. Please try again.');
      setMessageColor('red');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button onClick={() => navigate('/')} style={styles.backIcon}>
          <FaArrowLeft />
        </button>
      </div>

      <form onSubmit={handleSignin} style={styles.form}>
        <div style={styles.formInner}>
          <h2 style={styles.heading}>Admin Log In</h2>

          {message && (
            <p
              style={{
                color: messageColor,
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              {message}
            </p>
          )}

          <div style={styles.field}>
            <input
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />

            <input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />

            <button type="submit" style={styles.primaryButton}>
              Sign In
            </button>
            <button
              type="button"
              onClick={handleRegister}
              style={styles.secondaryButton}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    // padding: 'calc(env(safe-area-inset-top, 20px) + 2rem) 1.5rem calc(env(safe-area-inset-bottom, 20px) + 2rem)',
    padding: '4rem 1rem 2rem', // top, sides, bottom
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  header: {
    width: '100%',
    maxWidth: '360px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '1.5rem',
  },
  backIcon: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#333',
  },
  form: {
    width: '100%',
    // maxWidth removed
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '0.75rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formInner: {
    width: '100%',
    maxWidth: '360px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  heading: {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '0.8rem',
    fontSize: '1rem',
    fontWeight: '500',
    lineHeight: '1.2',
    border: '1px solid #ccc',
    borderRadius: '0.5rem',
    boxSizing: 'border-box',
    appearance: 'none',
    outline: 'none',
  },

  primaryButton: {
    display: 'block',
    width: '100%',
    maxWidth: '100%', // match input sizing
    padding: '0.8rem',
    fontSize: '1rem',
    fontWeight: '500',
    lineHeight: '1.2',
    backgroundColor: '#007bff',
    color: 'white',
    border: '1px solid #007bff',
    borderRadius: '0.5rem',
    boxSizing: 'border-box',
    cursor: 'pointer',
    appearance: 'none',
    alignSelf: 'stretch', // ensures full width inside flex
  },

  secondaryButton: {
    display: 'block',
    width: '100%',
    maxWidth: '100%', // match input sizing
    padding: '0.8rem',
    fontSize: '1rem',
    fontWeight: '500',
    lineHeight: '1.2',
    backgroundColor: '#28a745',
    color: 'white',
    border: '1px solid #28a745',
    borderRadius: '0.5rem',
    boxSizing: 'border-box',
    cursor: 'pointer',
    appearance: 'none',
    alignSelf: 'stretch',
  },
  label: {
    alignSelf: 'flex-start',
    fontWeight: '500',
  },
  field: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
};

export default LogIn;
