import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';

class SweatPointsController {
  async get(req: Request, res: Response): Promise<void> {
    try {
        res.json({ message: 'Hello world form GET' });
    } catch (error) {
        console.log(error);
    }
    // try {
    //     const data = await Data.find(); // Assuming Data is a model with a find method
    //     res.json(data);
    // } catch (error) {
    //     res.status(500).json({ error: 'An error occurred while fetching data' });
    // }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
        res.json({ message: 'Hello world form GET 2', response: req.params.id, identificator: uuidv4() });
    } catch (error) {
        console.log(error);
    }
    // try {
    //     const data = await Data.find(); // Assuming Data is a model with a find method
    //     res.json(data);
    // } catch (error) {
    //     res.status(500).json({ error: 'An error occurred while fetching data' });
    // }
  }

  async create(req: Request, res: Response): Promise<void> {
    // try {
    //     const data = new Data(req.body);
    //     await data.save();
    //     res.status(201).json(data);
    // } catch (error) {
    //     res.status(500).json({ error: 'An error occurred while saving data' });
    // }
  }

  async update(req: Request, res: Response): Promise<void> {
    // try {
    //     const data = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
    //     if (!data) {
    //         res.status(404).json({ error: 'Data not found' });
    //     } else {
    //         res.json(data);
    //     }
    // } catch (error) {
    //     res.status(500).json({ error: 'An error occurred while updating data' });
    // }
  }

  async remove(req: Request, res: Response): Promise<void> {
    // try {
    //     const data = await Data.findByIdAndDelete(req.params.id);
    //     if (!data) {
    //         res.status(404).json({ error: 'Data not found' });
    //     } else {
    //         res.status(204).end();
    //     }
    // } catch (error) {
    //     res.status(500).json({ error: 'An error occurred while deleting data' });
    // }
  }
}

export default new SweatPointsController();
