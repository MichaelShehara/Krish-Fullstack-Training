package coffeeProject;

import coffeeProject.AddOn.Milk;
import coffeeProject.AddOn.Sugar;
import coffeeProject.Coffeeblends.HouseBlend;

public class CoffeeShop {

	public static void main(String[] args) {
		HouseBlend houseblend = new HouseBlend();
		System.out.println(houseblend.getDescription() + ":"  + houseblend.cost());

		Milk milkAddOn = new Milk(houseblend);
		System.out.println(milkAddOn.getDescription() + ":" + milkAddOn.cost());

		Sugar sugarAddOn = new Sugar(milkAddOn);
		System.out.println(sugarAddOn.getDescription() + ":" + sugarAddOn.cost());

	}

}
