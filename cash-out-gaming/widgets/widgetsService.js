import { Widgets } from './widgets';

const widgetsService = {
  async getWidgets() {
    return await Widgets.find().exec();
  },

  async getWidget(id) {
    return await Widgets.findById(id).exec();
  },

  async createWidget(name, type, data) {
    const widgetDoc = new Widgets({ name, type, data });
    return await widgetDoc.save();
  },

  async updateWidget(id, name, type, data) {
    const widgetDoc = await Widgets.findById(id).exec();
    widgetDoc.name = name;
    widgetDoc.type = type;
    widgetDoc.data = data;
    return await widgetDoc.save();
  },

  async deleteWidget(id) {
    return await Widgets.findByIdAndRemove(id).exec();
  },
};

export default widgetsService;