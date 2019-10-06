<template>
  <v-layout justify-center row wrap px-4>
    <v-flex xs12 pa-5>Drag elemnts from the form elements area to the selected element area to add them to the HTML.</v-flex>
    <v-flex xs5>
      <v-card tile>
        <v-card-title>Form Elements</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="min-height:300px">
          <draggable
            class="list-group"
            :list="elements"
            :group="{ name: 'elements', pull: 'clone' }"
            :clone="clone"
            :sort="false"
          >
            <v-list-item v-for="(element, index) in elements" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ element.type }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </draggable>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs2 align-self-center style="text-align: center">
      <v-btn @click="submit()">Submit</v-btn>
    </v-flex>
    <v-flex xs5>
      <v-card tile>
        <v-card-title>Selected Elements</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="min-height:300px">
          <draggable
            class="list-group"
            :list="selectedElements"
            :group="{ name: 'elements', pull: false }"
          >
            <v-list-item
              class="ignore-drag"
              v-for="(element, index) in selectedElements"
              :key="index"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <v-layout>
                    <v-flex xs6> {{ element.type }} </v-flex>
                    <v-spacer></v-spacer>
                    <v-flex xs1>
                      <v-dialog v-model="dialog" persistent max-width="290">
                        <template v-slot:activator="{ on }">
                          <v-icon v-on="on" @click="elementEditied = element"
                            >fas fa-edit</v-icon
                          >
                        </template>
                        <v-card>
                          <v-card-title class="headline">
                            Properties
                          </v-card-title>
                          <v-card-text>
                            <v-layout row wrap px-2>
                              <v-flex xs12>
                                <v-text-field
                                  label="Identifier"
                                  v-model="identifier"
                                >
                                </v-text-field>
                              </v-flex>
                              <v-flex xs12>
                                <v-text-field label="Name" v-model="name">
                                </v-text-field>
                              </v-flex>
                              <!-- <v-flex xs12>
                                <v-text-field label="Color" v-model="color">
                                </v-text-field>
                              </v-flex>
                              <v-flex xs12>
                                <v-text-field label="Size" v-model="size">
                                </v-text-field>
                              </v-flex> -->
                            </v-layout>
                          </v-card-text>
                          <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn
                              color="green darken-1"
                              text
                              @click="dialog = false"
                            >
                              Done
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-flex>
                    <v-flex xs1>
                      <v-icon @click="remove(index)">fas fa-times</v-icon>
                    </v-flex>
                  </v-layout>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </draggable>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import draggable from "vuedraggable";

export default {
  data() {
    return {
      elements: [
        {
          properties: {
            identifier: "",
            name: ""
            // color: "",
            // size: ""
          },
          type: "Text Field"
        },
        {
          properties: {
            identifier: "",
            name: ""
            // color: "",
            // size: ""
          },
          type: "Submit Button"
        },
        {
          properties: {
            identifier: "",
            name: ""
            // color: "",
            // size: ""
          },
          type: "Radio Button"
        },
        {
          properties: {
            identifier: "",
            name: ""
            // color: "",
            // size: ""
          },
          type: "Check Box"
        },
        {
          properties: {
            identifier: "",
            name: ""
            // color: "",
            // size: ""
          },
          type: "Text Area"
        },
        {
          properties: {
            identifier: "",
            name: ""
            // color: "",
            // size: ""
          },
          type: "File Input"
        }
      ],
      selectedElements: [],
      dialog: false,
      elementEditied: null
    };
  },
  computed: {
    name: {
      get() {
        return this.elementEditied ? this.elementEditied.properties.name : "";
      },
      set(value) {
        this.elementEditied.properties.name = value;
      }
    },
    identifier: {
      get() {
        return this.elementEditied
          ? this.elementEditied.properties.identifier
          : "";
      },
      set(value) {
        this.elementEditied.properties.identifier = value;
      }
    }
    // color: {
    //   get() {
    //     return this.elementEditied ? this.elementEditied.properties.color : "";
    //   },
    //   set(value) {
    //     this.elementEditied.properties.color = value;
    //   }
    // },
    // size: {
    //   get() {
    //     return this.elementEditied ? this.elementEditied.properties.size : "";
    //   },
    //   set(value) {
    //     this.elementEditied.properties.size = value;
    //   }
    // }
  },
  methods: {
    clone(element) {
      return JSON.parse(JSON.stringify(element));
    },
    remove(index) {
      this.selectedElements.splice(index, 1);
    },
    submit() {
      this.$emit("submit", this.selectedElements);
    }
  },
  components: {
    draggable
  }
};
</script>
