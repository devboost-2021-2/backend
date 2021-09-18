class HelloController {
  static index(req, res) {
    const { name } = req.params;
    const message = `Hello ${name}`;
    return res.status(200).json({ message });
  }
}

export default HelloController;
