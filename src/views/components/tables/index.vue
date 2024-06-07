<script lang="tsx" setup>
  import { h } from 'vue';
  import Table from '@/components/Table/index.vue';

  const option = [
    {
      label: 'Date',
      prop: 'date',
      sortable: true,
    },
    {
      label: 'Mesa',
      prop: 'mesa',
      sortable: true,
    },
    {
      label: 'Mesero',
      prop: 'mesero',
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

  const tabList = [
    {
      date: '2016-05-03',
      mesa: '7',
      mesero: 'Tom',
      Productos: 'peppa pig',
    },
    {
      date: '2016-05-03',
      mesa: '7',
      mesero: 'Tom',
      Productos: 'peppa pig',
    },
    {
      date: '2016-05-03',
      mesa: '7',
      mesero: 'Tom',
      Productos: 'peppa pig',
      children: [
        {
          date: '2016-05-03',
          mesa: '7',
          mesero: 'Tom',
          Productos: 'peppa pig',
        },
        {
          date: '2016-05-03',
          mesa: '7',
          mesero: 'Tom',
          Productos: 'peppa pig',
        },
      ],
    },
    {
      date: '2016-05-03',
      mesa: '7',
      mesero: 'Tom',
      Productos: 'peppa pig',
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
</script>

<template>
  <div>
    <el-card class="box-card" style="max-width: 480px">
      <span>Agregar Nuevo</span>
    </el-card>

    <el-card class="box-card" style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>Mesa 1</span>
        </div>
      </template>
      <Table :data="tabList" border row-key="date" :option="option">
        <template #name_header="slotData">
          <span>{{ `插槽：${slotData.customItem.label}` }}</span>
        </template>
        <template #name="slotData">
          <span>{{ slotData.row.name }}</span>
        </template>
      </Table>
      <template #footer>
        <el-button>action</el-button>
      </template>
    </el-card>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>嵌套表格</span>
        </div>
      </template>
      <Table :data="tabList" border row-key="date" :option="nestingOption">
        <template #name_header="slotData">
          <span>{{ `插槽：${slotData.customItem.label}` }}</span>
        </template>
        <template #name="slotData">
          <span>{{ slotData.row.name }}</span>
        </template>
      </Table>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
  .box-card {
    margin-bottom: 20px;
  }

  .nesting {
    padding: 0 20px;
  }
</style>
