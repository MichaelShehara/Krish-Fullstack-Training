package coffeeProject;

public abstract class AddOn extends Beverage {
	protected Beverage beverage;

	public AddOn(String description, Beverage bev) {
		super(description);
		this.beverage = bev;
	}

	public abstract String getDescription();

	public static class Sugar extends AddOn {
		public Sugar(Beverage bev) {
			super("Sugar", bev);
		}

		@Override
		public String getDescription() {
			return beverage.getDescription() + " " + "& Mocha";
		}

		@Override
		public double cost() {
			return beverage.cost() + 50;
		}
	}

	public static class Milk extends AddOn {
		public Milk(Beverage bev) {
			super("Milk", bev);
		}

		@Override
		public String getDescription() {
			return beverage.getDescription() + " " + "with Milk";
		}

		@Override
		public double cost() {
			return beverage.cost() + 100;
		}
	}

}
