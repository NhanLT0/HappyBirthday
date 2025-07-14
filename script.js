body {
  margin: 0;
  padding: 0;
  background: black;
  overflow: hidden;
  font-family: monospace;
}

.shader {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.note {
  font-size: 26px;
  padding: 20px 40px;
  border: 2px solid white;
  border-radius: 14px;
  color: white;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 0 10px white;
}

.note:hover {
  background-color: white;
  color: black;
  transform: scale(1.08);
  box-shadow: 0 0 20px white;
}

canvas {
  display: block;
  background-color: black;
}
