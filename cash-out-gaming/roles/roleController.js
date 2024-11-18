import express from 'express';
import { roleService } from './roleService';

const router = express.Router();

router.get('/roles', async (req, res) => {
  const roles = await roleService.getRoles();
  res.json(roles);
});

router.get('/roles/:id', async (req, res) => {
  const roleDoc = await roleService.getRole(req.params.id);
  res.json(roleDoc);
});

router.post('/roles', async (req, res) => {
  const { name, description } = req.body;
  const roleDoc = await roleService.createRole(name, description);
  res.json(roleDoc);
});

router.put('/roles/:id', async (req, res) => {
  const { name, description } = req.body;
  const roleDoc = await roleService.updateRole(req.params.id, name, description);
  res.json(roleDoc);
});

router.delete('/roles/:id', async (req, res) => {
  await roleService.deleteRole(req.params.id);
  res.json({ message: 'Role deleted successfully' });
});

export default router;