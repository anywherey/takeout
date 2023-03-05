<template>
    <div>
        <section style="display: flex;flex-wrap: wrap;">
            <div style="display: flex;margin-right:5px;margin-top:5px;">
                <div style="background: #ffcf00;border-radius:6px 0 0 6px;" >
                    <div style="height:inherit;border-radius:6px 0 15px 6px;padding:4px;background-color:#ffb43e"><img src="@/assets/icons/huangguan.png" alt=" " style="width: 21px;height: 16px;"></div>
                </div>
                <div class="bg-mtYello" style="border-radius:0 6px 6px 0;padding:4px;"><span>¥</span>
                    <span>10</span><span>无门槛</span>
                </div>
                <div class="bg-mtYello" style="border-radius: 6px;">
                    <div style="margin-top:4px;padding:0 4px;border-left:1px dashed gray;">兑换</div>
                    <!-- <div style="position:absolute;left:0;top:0;width: 1px;height: 100%;"></div> -->
                </div>
            </div>
            <div style="display: flex;margin-right:5px;margin-top:5px;">
                <div style="background: #fff5f3;border-radius:6px 0 0 6px;border-top:1px solid #daaba3;border-left:1px solid #daaba3;border-bottom: 1px solid #daaba3;" >
                    <div style="border-radius:6px 0 15px 6px;padding:4px;background-color:#ffe2e7"><span style="color:#e45e45">神券</span></div>
                </div>
                <div  style="border-radius:0 6px 6px 0;padding:4px;background: #fff5f3;border-bottom: 1px solid #daaba3;border-top: 1px solid #daaba3;"><span>¥</span>
                    <span>10</span><span>满20可用</span>
                </div>
                <div  style="border-radius: 6px;background: #fff5f3;border-bottom: 1px solid #daaba3;border-top: 1px solid #daaba3;border-right: 1px solid #daaba3;">
                    <div style="margin-top:4px;padding:0 4px;border-left:1px dashed gray;">领取</div>
                    <!-- <div style="position:absolute;left:0;top:0;width: 1px;height: 100%;"></div> -->
                </div>
            </div>
            <div style="display: flex;margin-right:5px;margin-top:5px;">
                <div style="display: flex;">
                    <div class="" style="border-radius:6px;padding:4px;background: linear-gradient(135deg,#fd6149,#f6664e);"><span>¥</span>
                        <span>10</span>
                    </div>
                    <div style="border-radius: 6px;background: linear-gradient(135deg,#fd6149,#f6664e);">
                        <div style="margin-top:4px;padding:0 4px;border-left:1px dashed gray;">领</div>
                        <!-- <div style="position:absolute;left:0;top:0;width: 1px;height: 100%;"></div> -->
                    </div>
                </div>
            </div>
        </section>
        <section style="display: flex;margin-top:5px;font-size: 13px;">
            <div style="border:1px solid #fd6149;margin-right:5px;border-radius: 8px;">
                <span style="border-right: 1px solid #fd6149;padding:0 4px;">33减3</span> <span>
                    40减8
                </span>
            </div>
            <div style="border:1px solid goldenrod;padding:0 4px;border-radius: 8px;">
                <span>最高10元无门槛红包</span>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped></style>