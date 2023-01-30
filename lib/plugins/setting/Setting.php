<?PHP

namespace applications\issue\history\views\get\plugins\setting;

use Entity\Map as Entity;
use Entity\Validation;

class Setting extends Entity
{
    protected function initialize() : void
	{
		$name = $this->addField('name');
		$name_validator = Validation::factory('Enum');
		$name->setPatterns($name_validator);
		$name->setRequired();
    }
}
