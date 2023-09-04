const TareasItem = {
  props: { id: { type: String } },

  template: `<div>
    <div class="input-group">
      <input class="form-control" type="text" v-model="idTarea" placeholder="idTarea" @input="updateUrls"/>
    </div>

    <div class="input-group">
      <span class="input-group-text">GET</span>
      <input type="text" class="form-control font-monospace" v-model="url" placeholder="url" />
      <button class="btn btn-primary btn-sm" @click="getItem">Ver</button>
    </div>

    <div v-if="errorGet">
      <pre class="text-danger">{{errorGet}}</pre>
    </div>

    <div v-if="!isObjectEmpty(item)">
      <pre>{{ item }}</pre>

      <div class="input-group">
        <input class="form-control" type="text" v-model="idTarea" placeholder="idTarea" @input="updateUrls"/>
      </div>

      <div class="row">
        <textarea class="form-control font-monospace" v-model="itemDtoJson" placeholder="itemDtoJson"></textarea>
      </div>

      <div class="input-group">
        <span class="input-group-text">PATCH</span>
        <input type="text" class="form-control font-monospace" v-model="updateUrl" placeholder="url">
        <button class="btn btn-info btn-sm" @click="updateItem">Update</button>
      </div>

      <div v-if="errorUpdate">
        <pre class="text-danger">{{errorUpdate}}</pre>
      </div>

      <div v-if="!isObjectEmpty(updated)">
        <pre>{{ updated }}</pre>
      </div>

      <!-- DELETE -->

      <div class="input-group">
        <input class="form-control" type="text" v-model="idTarea" placeholder="idTarea" @input="updateUrls"/>
      </div>

      <div class="input-group">
        <span class="input-group-text">DELETE</span>
        <input type="text" class="form-control font-monospace" v-model="deleteUrl" placeholder="url">
        <button class="btn btn-danger btn-sm" @click="deleteItem">Delete</button>
      </div>

      <div v-if="errorDelete">
        <pre class="text-danger">{{errorDelete}}</pre>
      </div>

      <div v-if="!isObjectEmpty(deleted)">
        <pre>{{ deleted }}</pre>
      </div>
    </div>

  </div>`,

  data() {
    return {
      item: {},
      itemDtoJson: '',
      updated: {},
      deleted: {},
      idTarea: this.id,
      url: '',
      updateUrl: '',
      deleteUrl: '',

      errorGet: null,
      errorUpdate: null,
      errorDelete: null,
    };
  },

  mounted() {
    this.updateUrls();
  },

  watch: {
    id(newValue) {
      this.idTarea = newValue;
      this.updateUrls();
      this.getItem();
    },

    item(newValue) {
      const itemDto = {
        texto: newValue.texto,
      };
      this.itemDtoJson = JSON.stringify(itemDto);
    },
  },

  methods: {
    isObjectEmpty(obj) {
      return JSON.stringify(obj) === "{}";
    },

    updateUrls() {
      const idTarea = this.idTarea;
      this.url = `/api/tareas/${idTarea}`;
      this.updateUrl = `/api/tareas/${idTarea}`;
      this.deleteUrl = `/api/tareas/${idTarea}`;
    },

    async getItem() {
      this.errorGet = null;
      
      try {
        const response = await axios.get(this.url);
        this.item = response.data;
      } catch (error) {
        console.log(error);
        this.errorGet = `${error.message}\n${JSON.stringify(error.response.data)}`;
      }
    },

    async updateItem() {
      this.errorUpdate = null;

      const body = JSON.parse(this.itemDtoJson);

      try {
        const response = await axios.patch(this.updateUrl, body);
        this.updated = response.data;
        this.getItem();
      } catch (error) {
        console.log(error);
        this.errorUpdate = `${error.message}\n${JSON.stringify(error.response.data)}`;
      }
    },

    async deleteItem() {
      this.errorDelete = null;

      try {
        const response = await axios.delete(this.deleteUrl);
        this.deleted = response.data;
      } catch (error) {
        console.log(error);
        this.errorDelete = `${error.message}\n${JSON.stringify(error.response.data)}`;
      }
    },

  }
};

export default TareasItem;