<script lang="tsx" setup>
  import { h, reactive, ref } from 'vue';
  import { CirclePlus } from '@element-plus/icons-vue';
  import { ElDialog } from 'element-plus';
  import { allOrders } from '../../../../mock/order.mock';
  import type { Product } from '../../../../mock/product.mock';
  import { allProducts } from '../../../../mock/product.mock';
  import Table from '@/components/Table/index.vue';
  import { useUserInfoStoreHook } from '@/store/modules/user';

  const tabList = [
    {
      date: '2016-05-03',
      mesa: '6',
      mesero: 'Ana',
      productos: 'peppa pig',
      children: [
        {
          date: '2016-05-03',
          mesa: '9',
          mesero: 'Tom',
          productos: 'peppa pig',
        },
        {
          date: '2016-05-03',
          mesa: '7',
          mesero: 'Tom',
          productos: 'peppa pig',
        },
      ],
    },
    {
      date: '2016-05-03',
      mesa: '7',
      mesero: 'Tom',
      productos: 'peppa pig',
    },
  ];

  const nestingOption = [
    {
      type: 'expand',
      render: (slotData: any) => {
        // return h('span', {}, `render：${slotData.row.address}`);
        const ngOption = [
          {
            label: 'Date',
            prop: 'date',
            sortable: true,
          },
          {
            label: 'Name',
            prop: 'name',
            isSlots: true,
          },
        ];
        return (
          <div style={{ padding: '0 8px' }}>
            <Table data={[slotData.row]} border row-key="date" option={ngOption}></Table>
          </div>
        );
      },
    },
    {
      label: 'Date',
      prop: 'date',
      sortable: true,
    },
    {
      label: 'Name',
      prop: 'name',
      isSlots: true,
    },
    {
      label: 'Productos',
      prop: 'productos',
      render_header: (slotData: any) => {
        return h('span', {}, `render_header：${slotData.customItem.label}`);
      },
      render: (slotData: any) => {
        return h('span', {}, `render：${slotData.row.address}`);
      },
    },
  ];

  const dialogFormVisible = ref(false);
  const formLabelWidth = '140px';

  const form = reactive({
    id: '34',
    // employee: waitress3,
    isDelivery: false,
    state: 'Tomado',
    // products: [cheeseBurger, hotDog],
    // table: allTablesH2[1],
    // customer: customer1,
    total_price: 25000,
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  });

  const userInfo = useUserInfoStoreHook().$state.userInfo;

  function getProductNames(productList: Product[]): string {
    console.log(userInfo);
    return productList.map((product) => product.name).toString();
  }
</script>

<template>
  <div class="flex flex-wrap gap-5">
    <el-card
      class="box-card flex flex-col items-center justify-center"
      @click="dialogFormVisible = true"
    >
      <div class="body-class flex flex-col items-center justify-center">
        <el-icon :size="50"><CirclePlus /></el-icon>
        <span>Agregar Nuevo</span>
      </div>
    </el-card>

    <el-card v-for="order in allOrders" :key="order.id" class="box-card" style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>{{ order.table ? `Mesa ${order.table.id}` : 'Domicilio' }}</span>
        </div>
      </template>
      <div>
        <p> Estado: {{ order.state }} </p>
        <p> Mesero: {{ order.employee.name }} </p>
        <p> Productos: {{ getProductNames(order.products) }}</p>
      </div>
      <template #footer>
        <el-button>Cancelar</el-button>
      </template>
    </el-card>
  </div>
  <el-card class="box-card" style="min-width: 13rem">
    <template #header> </template>
    <Table :data="tabList" border row-key="date" :option="nestingOption">
      <template #name_header="slotData">
        <span>{{ `插槽：${slotData.customItem.label}` }}</span>
      </template>
      <template #name="slotData">
        <span>{{ slotData.row.name }}</span>
      </template>
    </Table>
  </el-card>

  <ElDialog v-model="dialogFormVisible" title="Ingresar Pedido" width="500">
    <el-form :model="form">
      <el-form-item label="Mesa" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a product">
          <el-option
            v-for="product in allProducts"
            :key="product.id"
            :label="product.name"
            :value="product.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Mesa" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a product">
          <el-option
            v-for="product in allProducts"
            :key="product.id"
            :label="product.name"
            :value="product.id"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"> Confirm </el-button>
      </div>
    </template>
  </ElDialog>
</template>

<style lang="scss" scoped>
  .box-card {
    min-width: 13rem;
    max-width: 580px;
    margin-bottom: 20px;
  }

  .nesting {
    padding: 0 20px;
  }
</style>
