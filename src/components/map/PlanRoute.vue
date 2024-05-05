<template>
	<el-dialog title="选择酒店" width="55%" :visible.sync="isShow" @open="opened">
		<div class="father" v-loading="loading" element-loading-text="正在为您寻找周围酒店">
			<p>周围为您找到一些酒店，选择一家酒店作为咱的落脚地吧！</p>
			<div class="content">
				<div class="Hotel" @click="createPlan(item)" v-for="(item,index) in hotelList" :key="index">
					<img :src="item.imgUrl" alt="">
					<div class="name">
						{{ item.name }}
					</div>
					<div class="score">
						<el-rate
							v-model="item.score"
							disabled
							show-score
							text-color="#ff9900"
							score-template="{value}">
						</el-rate>
					</div>
					<div class="price">
						<span>{{ item.price }}</span> 元起
					</div>
				</div>
			</div>
		</div>
	</el-dialog>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			isShow: false,
			hotelList: []
		}
	},
	methods: {
		showPlan() {
			this.isShow = true
		},
		opened() {
			this.loading = true
			setTimeout(() => {
				this.hotelList = [
				{
					imgUrl: './hotel/1.jpg',
					name: '百富怡大酒店',
					coordinates: [116.444114, 39.94307],
					score: 4,
					price: 122
				},
				{
					imgUrl: './hotel/2.jpg',
					name: '国际连锁酒店',
					score: 4,
					price: 122
				},
				{
					imgUrl: './hotel/3.jpg',
					name: '国际连锁酒店',
					score: 4,
					price: 122
				},
			]
			this.loading = false
			}, 1000);
		},
		createPlan(hotel) {
			this.isShow = false
			this.$emit('createPlan', hotel)
		}
	}
}
</script>

<style scoped lang="less">
.father {
	height: 300px;
	.content {
		display: flex;
		justify-content: space-between;
		.Hotel {
			width: 234px;
			height: 285px;
			background-color: #fff;
			transition: all 0.5s;
			cursor: pointer;
			div {
				margin-left: 10px;
			}
			&:hover {
				box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			}
			img {
				display: block;
				width: 234px;
				height: 156px;
			}
			.name {
				font-size: 16px;
				font-weight: 400;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				margin-top: 15px;
				color: #323232;
			}
			.score {
				margin-left: 0px;
				margin-top: 10px;
				font-weight: 400;
				font-size: 14px;
				height: 24px;
				display: flex;
				line-height: 24px;
			}
			.price {
				span {
					font-size: 18px;
					font-weight: 700;
				}
			}
		}
	}
	p {
		margin-bottom: 10px;
	}
}

</style>